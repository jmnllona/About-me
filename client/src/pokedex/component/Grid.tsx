import type { Pokemon } from "../types/pokemon";
import { Link } from "react-router-dom";
import { TypeBadge } from "./index";


import { FileWarning } from "lucide-react";

const getPokemonId = (id: number) => String(id).padStart(3, "0");

export default function Grid({ data }: { data: Pokemon[] }) {
      return (
            <div className={`flex flex-col md:grid grid-cols-2  gap-1  md:grid-cols-4 lg:grid-cols-8`}>
                  {data.length === 0 ? (
                        <div className={`col-span-full p-3 py-10 text-center text-[color:var(--text-strong)] hover:bg-[color:var(--notice-hover)] flex gap-2 justify-center`}>
                            <FileWarning/> Pokemon not found ?? huhh
                        </div>
                  ) : (
                        data.map((pokemon) => (
                              <Link
                                    key={pokemon.id}
                                    to={`/hobbies/games/pokedex/${pokemon.id}`}
                                    className={`
                                     flex min-w-0 w-full md:h-[190px] md:flex-col items-center justify-center gap-2 border border-[color:var(--border)] text-[color:var(--text-strong)]  text-xs font-semibold  bg-[color:var(--bg-2)]  hover:bg-[color:var(--tile-hover)]
                                      p-4 text-center  transition  duration-300
                                    `}>
                                    <span className=" text-[color:var(--text-muted)]  font-normal">#{getPokemonId(pokemon.id)}</span>

                                    <div className="max-h-14 max-w-[56px]">
                                          <img
                                                className="-translate-y-6 scale-[2] [image-rendering:pixelated] "
                                                src={`/images/pokemon/box-icon/${getPokemonId(pokemon.id)}.png`}
                                          />
                                    </div>

                                    <p className="w-20 ">{pokemon.name}</p>

                                    <div className="flex flex-col gap-1">
                                          {pokemon.types.map((type) => (
                                                <TypeBadge key={type} type={type} />
                                          ))}
                                    </div>
                              </Link>
                        ))
                  )}
            </div>
      );
}