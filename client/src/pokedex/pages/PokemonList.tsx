import { useEffect, useState } from "react";
import Grid from "../component/Grid";
import { types } from "../data/pokedex_constants";
import { usePokedexContext } from "../context/PokedexContext";
import { Nav } from "../component/index";
import { useToast } from "../../context/ToastContext";
 

export default function PokemonListPage() {
      const { pokemonData } = usePokedexContext();
        const  {showToast} = useToast();

      const [search, setSearch] = useState("");
      const [selectedType, setSelectedType] = useState("");
      const [selectedType2, setSelectedType2] = useState("");
      const [isFilterOpen, setIsFilterOpen] = useState(false);
      const [itemCount, setItemCount] = useState(42);

      const filteredMons = pokemonData.filter(
            (pokemon) =>
                  pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
                  (selectedType === "" || pokemon.types.includes(selectedType)) &&
                  (selectedType2 === "" || pokemon.types.includes(selectedType2)),
      );

       useEffect(() => {
        setItemCount(42);
       }, [search, selectedType, selectedType2]);

      const currentMons = filteredMons.slice(0, itemCount);

      const handleClick = () => {
            setItemCount((prev) => Math.min(prev + 49, filteredMons.length));
              showToast("Loaded 45 more hihi");
      };



      return (
            <div  className="w-full mx-auto px-2 py-16 md:px-10 ">
            <Nav></Nav>
                  <header className="flex mt-6   items-center bg-stone-960/60 py-2  backdrop-blur-md  sticky top-12 bg-stone-900 z-20 ">
                        <h1 className="text-4xl tracking-tight text-white">Pokédex</h1>

                        <div className="relative ml-auto ">
                              {/* Desktop */}
                              <div className="hidden gap-3 md:flex ">
                                    <input
                                          type="text"
                                          id="search-bar"
                                          value={search}
                                          onChange={(e)=>setSearch(e.target.value)}
                                          placeholder="e.g. pikachu"
                                          className="w-full max-w-[200px] border border-stone-600 bg-stone-800 px-5 py-1.5 text-xs text-white outline-none placeholder:text-stone-400 focus:border-cyan-500"
                                    />

                                    {[selectedType, selectedType2].map((type, index) => (
                                          <select
                                                key={index}
                                                value={type}
                                                onChange={(e) =>
                                                      index === 0
                                                            ? setSelectedType(e.target.value)
                                                            : setSelectedType2(e.target.value)
                                                }
                                                className="w-24 min-w-0  border border-stone-600 bg-stone-800 px-3 py-1.5 text-xs text-stone-300 outline-none">
                                                <option value="">none</option>
                                                {Object.keys(types).map((type) => (
                                                      <option key={type} value={type}>
                                                            {type}
                                                      </option>
                                                ))}
                                          </select>
                                    ))}
                              </div>

                              {/* Mobile */}
                              <div className="md:hidden" onMouseLeave={() => setIsFilterOpen(false)}>
                                    <button
                                          type="button"
                                          onClick={() => setIsFilterOpen((open) => !open)}
                                          className="border border-stone-600 px-3 py-1 text-xs text-white">
                                          Filter
                                    </button>

                                    {isFilterOpen && (
                                          <div className="absolute right-0 top-full z-20 mt-2 flex w-64 flex-col gap-3 border border-stone-600 bg-stone-900 p-3 shadow-md">
                                                <input
                                                      type="text"
                                                      value={search}
                                                      onChange={(e) => setSearch(e.target.value)}
                                                      placeholder="e.g. pikachu"
                                                      className="w-full border border-stone-600 bg-stone-800 px-3 py-1 text-xs text-white outline-none placeholder:text-stone-400"
                                                />

                                                {[selectedType, selectedType2].map((type, index) => (
                                                      <select
                                                            key={index}
                                                            value={type}
                                                            onChange={(e) =>
                                                                  index === 0
                                                                        ? setSelectedType(e.target.value)
                                                                        : setSelectedType2(e.target.value)
                                                            }
                                                            className="w-full border border-stone-600 bg-stone-800 px-3 py-1 text-xs text-stone-300 outline-none">
                                                            <option value="">
                                                                  {index === 0 ? "Type 1" : "Type 2"}
                                                            </option>
                                                            {Object.keys(types).map((type) => (
                                                                  <option key={type} value={type}>
                                                                        {type}
                                                                  </option>
                                                            ))}
                                                      </select>
                                                ))}
                                          </div>
                                    )}
                              </div>
                        </div>
                  </header>

                  <div className="w-full  space-y-4 ">
                        <h2 className="text-sm font-semibold text-stone-400 ">Gen 1 - Gen 5</h2>
                        <Grid data={currentMons} />

                        <div className="flex items-center justify-center ">
                              <button
                                    onClick={handleClick}
                                    className={`${itemCount >= filteredMons.length ? "hidden" : "block"}  w-96 py-2 text-white hover:text-cyan-300 hover:underline text-sm font-mono`}>
                                    Load More
                              </button>
                        </div>
                  </div>
            </div>
      );
}

// const ITEMS_PER_PAGE = 35;
// const totalPages = Math.ceil(filteredMons.length / ITEMS_PER_PAGE);
// const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
// const currentMons = filteredMons.slice(
//   startIndex,
//   startIndex + ITEMS_PER_PAGE,
// );

// useEffect(() => {
//   setCurrentPage(1);
// }, [search, selectedType, selectedType2]);

// <button
//   disabled={currentPage === 1}
//   onClick={() => setCurrentPage((page) => page - 1)}
//   className="w-20 border border-stone-600 bg-stone-800 px-3 py-1 text-gray-300 shadow-md disabled:opacity-40"
// >
//   Previous
// </button>

// <span className="text-stone-400">
//   {currentPage} / {totalPages}
// </span>

// <button
//   disabled={currentPage === totalPages || totalPages === 0}
//   onClick={() => setCurrentPage((page) => page + 1)}
//   className="w-20 border border-stone-600 bg-stone-800 px-3 py-1 text-gray-300 shadow-md disabled:opacity-40"
// >
//   Next
// </button>
