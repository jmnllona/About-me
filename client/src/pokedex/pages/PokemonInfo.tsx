import { useEffect } from "react";
import { InfoCard } from "../component";
import { useParams, useLocation, Link } from "react-router-dom";
import { usePokedexContext } from "../context/PokedexContext";

export default function PokemonInfoPage() {
      const { pokemonData } = usePokedexContext();

      const { id } = useParams();

      const pokemonId = Number(id);

      const selectedIndex = pokemonData.findIndex((p) => p.id == pokemonId);
      const pokemon = pokemonData[selectedIndex];
      const prevPokemon = pokemonData[selectedIndex - 1] ?? null;
      const nextPokemon = pokemonData[selectedIndex + 1] ?? null;

      const location = useLocation();

      useEffect(() => {
            window.scrollTo({
                  top: 0,
                  behavior: "instant",
            });
      }, [location.pathname]);

      return (
            <div className=" w-full max-w-6xl  mx-auto  px-2 py-16 md:px-6 ">
                  <div className={`flex-1 flex flex-col items-center  text-xs   space-y-6`}>
                        <div className="flex w-full max-w-2xl gap-3 ">
                              {prevPokemon && (
                                    <Link
                                          to={`/hobbies/games/pokedex/${prevPokemon.id}`}
                                          className="group mr-auto py-0.5 px-4 font-mono text-stone-400 transition  hover:text-white">
                                          {"◀ "}
                                          <span className="underline-offset-4 transition group-hover:underline">
                                                {prevPokemon.name}
                                          </span>
                                    </Link>
                              )}
                              {nextPokemon && (
                                    <Link
                                          to={`/hobbies/games/pokedex/${nextPokemon.id}`}
                                          className="group ml-auto py-0.5 px-4 font-mono text-stone-400 transition  hover:text-white">
                                          <span className="underline-offset-4  group-hover:underline">
                                                {nextPokemon.name}
                                          </span>{" "}
                                          {"▶"}
                                    </Link>
                              )}
                              <Link
                                    to="/hobbies/games/pokedex/"
                                    className="py-0.5 px-4  border border-stone-700 bg-stone-800 text-white rounded">
                                    X
                              </Link>
                        </div>

                        {pokemon && <InfoCard pokemon={pokemon}></InfoCard>}
                  </div>
            </div>
      );
}
