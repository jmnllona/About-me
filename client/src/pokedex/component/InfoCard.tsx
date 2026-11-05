import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { abilities, hiddenAbilities } from "../data/pokedex_constants";
import type { Pokemon } from "../types/pokemon";
import { metersToFeet, kgToLbs } from "../utils/conversion";
import { calculateStats } from "../utils/statsCalculator";
import { usePokedexContext } from "../context/PokedexContext";
import { StatBar, TotalStatBar, InfoRow, SectionTitle, TypeBadge } from "./index";

const getPokemonId = (id: number) => String(id).padStart(3, "0");

const getPokemonImage = (id: number, shiny = false) =>
      `/images//pokemon/${shiny ? "gen-5_shiny" : "gen-5"}/${getPokemonId(id)}.png`;

const STAT_MAX = 255;
const TOTAL_STATS_MAX = 700;

const STAT_CONFIG: {
      key: keyof Pokemon["stats"];
      label: string;
}[] = [
      { key: "hp", label: "HP" },
      { key: "attack", label: "Attack" },
      { key: "defense", label: "Defense" },
      { key: "specialAttack", label: "Sp.Atk" },
      { key: "specialDefense", label: "Sp.Def" },
      { key: "speed", label: "Speed" },
];

export default function InfoCard({ pokemon }: { pokemon: Pokemon }) {
      const { getPokemon } = usePokedexContext();

      const [toggleShiny, setToggleShiny] = useState(false);

      const total =
            pokemon.stats.speed +
            pokemon.stats.specialDefense +
            pokemon.stats.specialAttack +
            pokemon.stats.defense +
            pokemon.stats.attack +
            pokemon.stats.hp;

      const calculatedStats = calculateStats(pokemon.stats);
      const pokemonId = getPokemonId(pokemon.id);

      return (
            <div className={`w-full max-w-6xl bg-stone-800 border border-stone-700  text-white  `}>
                  <header className="flex gap-6 border-b border-stone-700 ">
                        <h1 className="text-xl font-bold px-6 py-1">{pokemon.name}</h1>
                  </header>

                  <div className="flex h-full w-full flex-col space-y-8 overflow-y-auto">
                        {/* Basic Info */}

                        <section id="top" className="flex w-full flex-wrap gap-6 p-6">
                              {/* Image */}

                              <div className="flex min-w-[150px] flex-1 items-center justify-center">
                                    <div className="relative flex w-[170px] min-w-[150px] items-center rounded-md">
                                          <img
                                                src={getPokemonImage(pokemon.id, toggleShiny)}
                                                alt={pokemon.name + (toggleShiny ? "shiny" : "")}
                                                className="w-full object-contain [image-rendering:pixelated]"
                                          />

                                          <div className="absolute bottom-0 -right-10 flex items-center">
                                                <button
                                                      onClick={() => setToggleShiny((prev) => !prev)}
                                                      className="relative h-[24px] w-[24px] font-thin rounded-sm border border-stone-700 p-0.5">
                                                      <span className="absolute bottom-0.5 left-1 ">
                                                            {toggleShiny ? "☆" : "★"}
                                                      </span>

                                                      <span className="absolute -top-0.5 right-1 text-[7px]">
                                                            {toggleShiny ? "☆" : "★"}
                                                      </span>
                                                </button>
                                          </div>
                                    </div>
                              </div>

                              {/* Information */}

                              <div className="flex-1 space-y-2">
                                    <InfoRow label="National №:">{pokemonId}</InfoRow>

                                    <div className="grid grid-cols-[minmax(110px,130px)_1fr] items-center">
                                          <span className="text-stone-400">Type:</span>

                                          <div className="flex items-center gap-2">
                                                {pokemon.types.map((type) => (
                                                      <TypeBadge key={type} type={type} />
                                                ))}
                                          </div>
                                    </div>

                                    <InfoRow label="Species:">{pokemon.species}</InfoRow>

                                    <InfoRow label="Height:">
                                          {pokemon.height.toFixed(1)}m ({metersToFeet(pokemon.height)}")
                                    </InfoRow>

                                    <InfoRow label="Weight:">
                                          {pokemon.weight.toFixed(1)}kg ({kgToLbs(pokemon.weight)} lbs)
                                    </InfoRow>
                              </div>
                        </section>

                        {/* Description */}

                        <div className="flex-1 ">
                              <SectionTitle>Pokedex Entry</SectionTitle>
                              <div className="w-full space-y-1 p-6">
                                    <p>{pokemon.description}</p>
                              </div>
                        </div>

                        {/* Stats */}

                        <section id="stats" className="flex-1">
                              <SectionTitle>Stats</SectionTitle>

                              <div className="w-full space-y-1 p-6">
                                    {STAT_CONFIG.map(({ key, label }) => (
                                          <StatBar
                                                key={key}
                                                label={label}
                                                value={pokemon.stats[key]}
                                                min={calculatedStats[key].min}
                                                max={calculatedStats[key].max}
                                                baseTotal={STAT_MAX}
                                          />
                                    ))}

                                    <TotalStatBar total={total} max={TOTAL_STATS_MAX} />
                              </div>

                              <p className="p-6">
                                    The stat ranges shown are for a Level 100 Pokémon. Minimum values are based on a
                                    hindering nature, 0 EVs, and 0 IVs, while maximum values are based on a beneficial
                                    nature, 252 EVs, and 31 IVs.
                              </p>
                        </section>

                        {/* Abilities */}

                        <section className="flex-1">
                              <SectionTitle>Abilities</SectionTitle>

                              <div className="flex flex-col w-fit p-6">
                                    {pokemon.abilities.normal.map((ability) => (
                                          <div key={ability} className="mb-3">
                                                <h3 className="mb-2">{ability}</h3>

                                                <p className="rounded border border-stone-700 p-3">
                                                      {abilities[ability.replace(/\s/g, "")]}
                                                </p>
                                          </div>
                                    ))}

                                    {pokemon.abilities.hidden && (
                                          <div>
                                                <h3 className="mb-2 text-cyan-500">
                                                      <span>Hidden:</span> <span>{pokemon.abilities.hidden}</span>
                                                </h3>

                                                <p className="rounded border border-stone-700 p-3">
                                                      {hiddenAbilities[pokemon.abilities.hidden.replace(/\s/g, "")]}
                                                </p>
                                          </div>
                                    )}
                              </div>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-2 ">
                              {/* Training */}

                              <section id="training" className="flex-1">
                                    <SectionTitle>Training</SectionTitle>

                                    <div className="w-full space-y-2 p-6">
                                          <InfoRow label="EV Yield:">
                                                {pokemon.training.evYield.amount} {pokemon.training.evYield.stat}
                                          </InfoRow>

                                          <InfoRow label="Catch Rate">{pokemon.training.catchRate}</InfoRow>

                                          <InfoRow label="Base Friendship">
                                                {pokemon.training.baseFriendship} (normal)
                                          </InfoRow>

                                          <InfoRow label="Base Exp.">{pokemon.training.baseExp}</InfoRow>

                                          <InfoRow label="Growth Rate">{pokemon.training.growthRate}</InfoRow>
                                    </div>
                              </section>

                              {/* Evolution */}

                              <section id="evolution" className="flex-1 mt-8 lg:m-0">
                                    <SectionTitle>Evolution Chart</SectionTitle>

                                    <div className="flex w-full flex-col gap-2 p-6">
                                          {pokemon.evolution ? (
                                                pokemon.evolution.map((e) => {
                                                      const currentPokemon = getPokemon(e.id);

                                                      if (e.from) {
                                                            return (
                                                                  <div
                                                                        key={e.id}
                                                                        className="flex h-10 items-center gap-2">
                                                                        <div className="flex max-h-full shrink-0 items-center justify-center">
                                                                              <img
                                                                                    className="-translate-y-5 scale-150 object-contain [image-rendering:pixelated]"
                                                                                    src={`/images/pokemon/box-icon/${getPokemonId(e.from)}.png`}
                                                                              />
                                                                        </div>

                                                                        <span>⟶</span>

                                                                        <div className="flex max-h-full shrink-0 items-center justify-center">
                                                                              <img
                                                                                    className="-translate-y-5 scale-150 object-contain [image-rendering:pixelated]"
                                                                                    src={`/images/pokemon/box-icon/${getPokemonId(e.id)}.png`}
                                                                              />
                                                                        </div>

                                                                        <div className="flex flex-wrap items-center justify-center gap-2">
                                                                              <Link
                                                                                    to={`/pokedex/${currentPokemon.id}`}
                                                                                    className="  text-stone-400 underline-offset-4 transition hover:underline hover:text-white">
                                                                                    {currentPokemon.name}
                                                                              </Link>

                                                                              <div className="block">
                                                                                    (<span>{e.method}</span>
                                                                                    {e.value && (
                                                                                          <span className="whitespace-nowrap">
                                                                                                {": "}
                                                                                                {e.value}
                                                                                          </span>
                                                                                    )}
                                                                                    )
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            );
                                                      }

                                                      return (
                                                            <div key={e.id} className="flex h-10 items-center gap-2">
                                                                  <div className="flex max-h-full shrink-0 items-center justify-center">
                                                                        <img
                                                                              className="-translate-y-5 scale-150 object-contain [image-rendering:pixelated]"
                                                                              src={`/images/pokemon/box-icon/${getPokemonId(e.id)}.png`}
                                                                        />
                                                                  </div>

                                                                  <div className="flex min-w-0 w-32 flex-wrap items-center justify-center gap-2 z-10">
                                                                        <Link
                                                                              to={`/pokedex/${currentPokemon.id}`}
                                                                              className="  text-stone-400 underline-offset-4 transition hover:underline hover:text-white">
                                                                              {currentPokemon.name}
                                                                        </Link>

                                                                        <span>({e.method})</span>
                                                                  </div>
                                                            </div>
                                                      );
                                                })
                                          ) : (
                                                <p>No Evolution</p>
                                          )}
                                    </div>
                              </section>
                        </div>
                  </div>
            </div>
      );
}
