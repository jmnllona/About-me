import type { Pokemon } from "../types/pokemon";
import { Link } from "react-router-dom";
import { TypeBadge } from "./index";


import { FileWarning } from "lucide-react";

const getPokemonId = (id: number) => String(id).padStart(3, "0");

export default function Grid({ data }: { data: Pokemon[] }) {
      return (
            <div className={`grid grid-cols-2  gap-[2.4px]  md:grid-cols-4 lg:grid-cols-7`}>
                  {data.length === 0 ? (
                        <div className={`col-span-full p-3 py-10 text-center text-white hover:bg-amber-100/75 flex gap-2 justify-center`}>
                            <FileWarning/> Pokemon not found ?? huhh
                        </div>
                  ) : (
                        data.map((pokemon) => (
                              <Link
                                    key={pokemon.id}
                                    to={`/hobbies/games/pokedex/${pokemon.id}`}
                                    className={`
                                     flex min-w-0 w-full h-[190px] flex-col items-center justify-center gap-2 border-b  border-r border-stone-700 text-white  text-xs font-semibold duration-300  bg-stone-800  hover:bg-white
                                      p-4 text-center  transition 
                                    `}>
                                    <span className=" text-white/60  font-normal">#{getPokemonId(pokemon.id)}</span>

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
