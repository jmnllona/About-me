// import { useEffect, useState } from "react";
// import pokemon_data from "../data/pokemon_data.json";

// // Types

// type Pokemon = {
//       id: number;
//       name: string;
//       types: string[];
//       height: number;
//       weight: number;
//       stats: {
//             hp: number;
//             attack: number;
//             defense: number;
//             specialAttack: number;
//             specialDefense: number;
//             speed: number;
//       };
//       description: string;
//       evolvesTo: number[] | null;
//       evolvesFrom: number[] | null;
//       image: string;
//       species: string;
// };

// type PokemonStats = Pokemon["stats"];

// type Page = 1 | 2 | 3;

// type PokemonView = "list" | "details";

// // Constants

// const STAT_MAX = 255;
// const TOTAL_STATS_MAX = 700;

// const STAT_CONFIG: {
//       key: keyof PokemonStats;
//       label: string;
// }[] = [
//       {
//             key: "hp",
//             label: "HP",
//       },
//       {
//             key: "attack",
//             label: "Attack",
//       },
//       {
//             key: "defense",
//             label: "Defense",
//       },
//       {
//             key: "specialAttack",
//             label: "Sp. Attack",
//       },
//       {
//             key: "specialDefense",
//             label: "Sp. Defense",
//       },
//       {
//             key: "speed",
//             label: "Speed",
//       },
// ];

// const TYPE_CLASSES: Record<string, string> = {
//       normal: "bg-stone-400",
//       fire: "bg-orange-500",
//       water: "bg-blue-500",
//       electric: "bg-yellow-400",
//       grass: "bg-lime-500",
//       ice: "bg-cyan-400",
//       fighting: "bg-red-700",
//       poison: "bg-purple-500",
//       ground: "bg-yellow-600",
//       flying: "bg-indigo-400",
//       psychic: "bg-pink-500",
//       bug: "bg-lime-600",
//       rock: "bg-stone-500",
//       ghost: "bg-purple-700",
//       dragon: "bg-indigo-700",
//       dark: "bg-gray-800",
//       steel: "bg-gray-500",
//       fairy: "bg-pink-400",
// };

// const UI = {
//       page: "min-h-screen bg-amber-50",
//       container: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16",

//       header: "border-b-2 border-amber-900/20 pb-4",
//       title: "text-4xl font-bold text-amber-950",

//       layout: "flex w-full flex-col gap-6 md:flex-row",

//       panel: "min-w-0 w-full rounded-md border-2 border-amber-900/20 bg-amber-100",
//       detailsPanel: "w-full md:max-w-lg",

//       panelHeader: "flex items-center justify-between border-b-2 border-amber-900/20 px-4 py-3",

//       panelTitle: "text-xl font-bold text-amber-950",

//       content: "px-4 py-4",

//       searchWrapper: "mb-4",
//       searchLabel: "sr-only",

//       search: "w-full rounded-md border-2 border-amber-900/20 bg-amber-50 px-4 py-2 text-amber-950 outline-none placeholder:text-amber-900/50 focus:border-amber-700",

//       list: "flex max-h-[500px] flex-col gap-2 overflow-y-auto pr-1",

//       listItem: "flex w-full items-center gap-4 rounded-md border-2 border-transparent bg-amber-50 px-4 py-3 text-left transition hover:border-amber-700/40 hover:bg-amber-200",

//       selectedListItem: "border-amber-700 bg-amber-200",

//       pokemonId: "w-10 shrink-0 text-sm font-bold text-amber-900/50",

//       pokemonName: "font-semibold capitalize text-amber-950",

//       image: "h-20 w-20 object-contain image-rendering-auto",

//       detailsImage: "h-40 w-40 object-contain",

//       type: "rounded-full px-3 py-1 text-xs font-bold capitalize text-white",

//       button: "rounded-md border-2 border-amber-900/20 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40",

//       pageButton: "rounded-md px-3 py-2 text-sm font-bold transition hover:bg-amber-200",

//       infoGrid: "grid grid-cols-2 gap-4",

//       infoBox: "rounded-md bg-amber-50 p-3",

//       infoLabel: "text-xs font-bold uppercase tracking-wide text-amber-900/50",

//       infoValue: "mt-1 font-semibold capitalize text-amber-950",

//       statRow: "mb-4",

//       statHeader: "mb-1 flex items-center justify-between",

//       statLabel: "text-sm font-semibold text-amber-950",

//       statValue: "text-sm font-bold text-amber-900",

//       statTrack: "h-3 overflow-hidden rounded-full bg-amber-900/10",

//       statBar: "h-full rounded-full bg-amber-700 transition-all",

//       description: "leading-relaxed text-amber-950/80",

//       pagination: "mt-4 flex items-center justify-center gap-2",

//       loading: "flex min-h-40 items-center justify-center text-amber-900/60",

//       error: "rounded-md bg-red-100 p-4 text-red-800",

//       empty: "py-8 text-center text-amber-900/60",
// } as const;

// // Helpers

// function getPokemonImageName(name: string) {
//       const imageNames: Record<string, string> = {
//             "nidoran♀": "nidoran-f",
//             "nidoran♂": "nidoran-m",
//             "farfetch'd": "farfetchd",
//             "mr. mime": "mr-mime",
//       };

//       return imageNames[name.toLowerCase()] ?? name.toLowerCase();
// }

// function getPokemonImageUrl(name: string) {
//       const imageName = getPokemonImageName(name);

//       return `https://img.pokemondb.net/sprites/black-white/normal/${imageName}.png`;
// }

// function getPokemonPageUrl(name: string) {
//       const imageName = getPokemonImageName(name);

//       return `https://pokemondb.net/pokedex/${imageName}`;
// }

// function getTypeClass(type: string) {
//       return TYPE_CLASSES[type.toLowerCase()] ?? "bg-gray-500";
// }

// function getStatPercentage(value: number) {
//       return Math.min((value / STAT_MAX) * 100, 100);
// }

// function getTotalStats(stats: PokemonStats) {
//       return Object.values(stats).reduce((total, value) => total + value, 0);
// }

// // Components

// type TypeBadgeProps = {
//       type: string;
// };

// function TypeBadge({ type }: TypeBadgeProps) {
//       return <span className={`${UI.type} ${getTypeClass(type)}`}>{type}</span>;
// }

// type StatBarProps = {
//       label: string;
//       value: number;
//       max?: number;
// };

// function StatBar({ label, value, max = STAT_MAX }: StatBarProps) {
//       const percentage = Math.min((value / max) * 100, 100);

//       return (
//             <div className={UI.statRow}>
//                   <div className={UI.statHeader}>
//                         <span className={UI.statLabel}>{label}</span>

//                         <span className={UI.statValue}>{value}</span>
//                   </div>

//                   <div className={UI.statTrack}>
//                         <div className={UI.statBar} style={{ width: `${percentage}%` }} />
//                   </div>
//             </div>
//       );
// }

// type PokemonListItemProps = {
//       pokemon: Pokemon;
//       selected: boolean;
//       onClick: () => void;
// };

// function PokemonListItem({ pokemon, selected, onClick }: PokemonListItemProps) {
//       return (
//             <button
//                   type="button"
//                   onClick={onClick}
//                   className={`${UI.listItem} ${selected ? UI.selectedListItem : ""}`}
//                   aria-current={selected ? "true" : undefined}>
//                   <span className={UI.pokemonId}>#{String(pokemon.id).padStart(3, "0")}</span>

//                   <img src={getPokemonImageUrl(pokemon.name)} alt={pokemon.name} className="h-16 w-16 object-contain" />

//                   <div className="min-w-0 flex-1">
//                         <p className={UI.pokemonName}>{pokemon.name}</p>

//                         <div className="mt-2 flex flex-wrap gap-2">
//                               {pokemon.types.map((type) => (
//                                     <TypeBadge key={type} type={type} />
//                               ))}
//                         </div>
//                   </div>
//             </button>
//       );
// }

// // Pokemon Info

// type PokemonInfoProps = {
//       pokemon: Pokemon;
// };

// function PokemonInfo({ pokemon }: PokemonInfoProps) {
//       return (
//             <div className="space-y-6">
//                   <div className="flex flex-col items-center">
//                         <a href={getPokemonPageUrl(pokemon.name)} target="_blank" rel="noreferrer">
//                               <img
//                                     src={getPokemonImageUrl(pokemon.name)}
//                                     alt={pokemon.name}
//                                     className={UI.detailsImage}
//                               />
//                         </a>

//                         <h2 className="mt-2 text-2xl font-bold capitalize text-amber-950">{pokemon.name}</h2>

//                         <p className="text-sm font-semibold text-amber-900/50">
//                               #{String(pokemon.id).padStart(3, "0")}
//                         </p>
//                   </div>

//                   <p className={UI.description}>{pokemon.description}</p>

//                   <div className={UI.infoGrid}>
//                         <div className={UI.infoBox}>
//                               <p className={UI.infoLabel}>Species</p>

//                               <p className={UI.infoValue}>{pokemon.species}</p>
//                         </div>

//                         <div className={UI.infoBox}>
//                               <p className={UI.infoLabel}>Height</p>

//                               <p className={UI.infoValue}>{pokemon.height}</p>
//                         </div>

//                         <div className={UI.infoBox}>
//                               <p className={UI.infoLabel}>Weight</p>

//                               <p className={UI.infoValue}>{pokemon.weight}</p>
//                         </div>

//                         <div className={UI.infoBox}>
//                               <p className={UI.infoLabel}>Types</p>

//                               <div className="mt-2 flex flex-wrap gap-2">
//                                     {pokemon.types.map((type) => (
//                                           <TypeBadge key={type} type={type} />
//                                     ))}
//                               </div>
//                         </div>
//                   </div>
//             </div>
//       );
// }

// // Pokemon Stats

// type PokemonStatsProps = {
//       stats: PokemonStats;
// };

// function PokemonStats({ stats }: PokemonStatsProps) {
//       const total = getTotalStats(stats);

//       return (
//             <div>
//                   {STAT_CONFIG.map(({ key, label }) => (
//                         <StatBar key={key} label={label} value={stats[key]} />
//                   ))}

//                   <div className="mt-6 border-t-2 border-amber-900/10 pt-4">
//                         <div className={UI.statHeader}>
//                               <span className={UI.statLabel}>Base Stat Total</span>

//                               <span className={UI.statValue}>{total}</span>
//                         </div>

//                         <div className={UI.statTrack}>
//                               <div
//                                     className={UI.statBar}
//                                     style={{
//                                           width: `${Math.min((total / TOTAL_STATS_MAX) * 100, 100)}%`,
//                                     }}
//                               />
//                         </div>
//                   </div>
//             </div>
//       );
// }

// // Pokemon Moves

// function PokemonMoves() {
//       return <div className={UI.empty}>Moves will be added here later.</div>;
// }

// // Aside

// type AsideProps = {
//       pokemon: Pokemon;
//       previousPokemon: Pokemon | null;
//       nextPokemon: Pokemon | null;
//       onPrevious: () => void;
//       onNext: () => void;
//       onClose: () => void;
// };

// function Aside({ pokemon, previousPokemon, nextPokemon, onPrevious, onNext, onClose }: AsideProps) {
//       const [page, setPage] = useState<Page>(1);

//       useEffect(() => {
//             setPage(1);
//       }, [pokemon.id]);

//       const pageTitles: Record<Page, string> = {
//             1: "Pokemon Info",
//             2: "Stats",
//             3: "Moves",
//       };

//       const changePage = (newPage: Page) => {
//             setPage(newPage);
//       };

//       return (
//             <aside className={`${UI.panel} ${UI.detailsPanel}`}>
//                   <header className={UI.panelHeader}>
//                         <button
//                               type="button"
//                               onClick={onPrevious}
//                               disabled={!previousPokemon}
//                               className={UI.button}
//                               aria-label={
//                                     previousPokemon
//                                           ? `Previous Pokemon: ${previousPokemon.name}`
//                                           : "No previous Pokemon"
//                               }>
//                               ←
//                         </button>

//                         <div className="text-center">
//                               <h1 className={UI.panelTitle}>{pageTitles[page]}</h1>

//                               <p className="text-xs text-amber-900/50">{pokemon.name}</p>
//                         </div>

//                         <div className="flex gap-2">
//                               <button
//                                     type="button"
//                                     onClick={onNext}
//                                     disabled={!nextPokemon}
//                                     className={UI.button}
//                                     aria-label={nextPokemon ? `Next Pokemon: ${nextPokemon.name}` : "No next Pokemon"}>
//                                     →
//                               </button>

//                               <button
//                                     type="button"
//                                     onClick={onClose}
//                                     className={UI.button}
//                                     aria-label="Close Pokemon details">
//                                     ×
//                               </button>
//                         </div>
//                   </header>

//                   <div className={UI.content}>
//                         {page === 1 && <PokemonInfo pokemon={pokemon} />}

//                         {page === 2 && <PokemonStats stats={pokemon.stats} />}

//                         {page === 3 && <PokemonMoves />}

//                         <nav className={UI.pagination} aria-label="Pokemon details pages">
//                               {[1, 2, 3].map((pageNumber) => (
//                                     <button
//                                           key={pageNumber}
//                                           type="button"
//                                           onClick={() => changePage(pageNumber as Page)}
//                                           className={
//                                                 page === pageNumber ? "font-bold text-amber-950" : "text-amber-900/30"
//                                           }
//                                           aria-label={`Page ${pageNumber}`}
//                                           aria-current={page === pageNumber ? "page" : undefined}>
//                                           {page === pageNumber ? "●" : "○"}
//                                     </button>
//                               ))}
//                         </nav>
//                   </div>
//             </aside>
//       );
// }

// // Pokedex

// function Pokedexx() {
//       const [pokemonData, setPokemonData] = useState<Pokemon[]>(pokemon_data);
//       const [selectedId, setSelectedId] = useState<number | null>(0);

//       const [search, setSearch] = useState("");
//       const [view, setView] = useState<PokemonView>("list");

//       const [isLoading, setIsLoading] = useState(false);
//       const [error, setError] = useState<string | null>(null);

//       // Fetch

//       // useEffect(() => {
//       //     const controller = new AbortController();

//       //     async function fetchPokemon() {
//       //         try {
//       //             setIsLoading(true);
//       //             setError(null);

//       //             const response = await fetch(
//       //                 "/api/pokemon/",
//       //                 {
//       //                     signal: controller.signal,
//       //                 }
//       //             );

//       //             if (!response.ok) {
//       //                 throw new Error(
//       //                     `Failed to fetch Pokemon: ${response.status}`
//       //                 );
//       //             }

//       //             const data: Pokemon[] =
//       //                 await response.json();

//       //             setPokemonData(data);

//       //             if (data.length > 0) {
//       //                 setSelectedId(data[0].id);
//       //             }
//       //         } catch (error) {
//       //             if (
//       //                 error instanceof DOMException &&
//       //                 error.name === "AbortError"
//       //             ) {
//       //                 return;
//       //             }

//       //             setError(
//       //                 error instanceof Error
//       //                     ? error.message
//       //                     : "Something went wrong while loading Pokemon."
//       //             );
//       //         } finally {
//       //             if (!controller.signal.aborted) {
//       //                 setIsLoading(false);
//       //             }
//       //         }
//       //     }

//       //     fetchPokemon();

//       //     return () => {
//       //         controller.abort();
//       //     };
//       // }, []);

//       // Search

//       const searchValue = search.trim().toLowerCase();

//       const filteredPokemon = pokemonData.filter((pokemon) => {
//             if (!searchValue) {
//                   return true;
//             }

//             return pokemon.name.toLowerCase().includes(searchValue) || pokemon.id.toString().includes(searchValue);
//       });

//       // Selected Pokemon

//       const selectedIndex = pokemonData.findIndex((pokemon) => pokemon.id === selectedId);

//       const selectedPokemon = selectedIndex !== -1 ? pokemonData[selectedIndex] : null;

//       // Navigation

//       const previousPokemon = selectedIndex > 0 ? pokemonData[selectedIndex - 1] : null;

//       const nextPokemon =
//             selectedIndex !== -1 && selectedIndex < pokemonData.length - 1 ? pokemonData[selectedIndex + 1] : null;

//       // Handlers

//       const handleSelect = (pokemon: Pokemon) => {
//             setSelectedId(pokemon.id);
//             setView("details");
//       };

//       const handlePrevious = () => {
//             if (!previousPokemon) {
//                   return;
//             }

//             setSelectedId(previousPokemon.id);
//       };

//       const handleNext = () => {
//             if (!nextPokemon) {
//                   return;
//             }

//             setSelectedId(nextPokemon.id);
//       };

//       const handleClose = () => {
//             setView("list");
//       };

//       const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//             setSearch(event.target.value);
//       };

//       // Loading

//       if (isLoading) {
//             return (
//                   <main className={UI.page}>
//                         <div className={UI.container}>
//                               <div className={UI.loading}>Loading Pokemon...</div>
//                         </div>
//                   </main>
//             );
//       }

//       // Error

//       if (error) {
//             return (
//                   <main className={UI.page}>
//                         <div className={UI.container}>
//                               <div className={UI.error}>
//                                     <p className="font-bold">Failed to load Pokemon.</p>

//                                     <p className="mt-1">{error}</p>
//                               </div>
//                         </div>
//                   </main>
//             );
//       }

//       // Empty

//       if (pokemonData.length === 0) {
//             return (
//                   <main className={UI.page}>
//                         <div className={UI.container}>
//                               <div className={UI.empty}>No Pokemon data was returned by the API.</div>
//                         </div>
//                   </main>
//             );
//       }

//       // Render

//       return (
//             <main className={UI.page}>
//                   <div className={UI.container}>
//                         <header className={UI.header}>
//                               <h1 className={UI.title}>Pokedex</h1>
//                         </header>

//                         <div className={UI.layout}>
//                               {selectedPokemon && (
//                                     <div
//                                           className={
//                                                 view === "details" ? "block w-full md:block" : "hidden w-full md:block"
//                                           }>
//                                           <Aside
//                                                 pokemon={selectedPokemon}
//                                                 previousPokemon={previousPokemon}
//                                                 nextPokemon={nextPokemon}
//                                                 onPrevious={handlePrevious}
//                                                 onNext={handleNext}
//                                                 onClose={handleClose}
//                                           />
//                                     </div>
//                               )}

//                               <section
//                                     className={
//                                           view === "list" ? "block min-w-0 flex-1" : "hidden min-w-0 flex-1 md:block"
//                                     }>
//                                     <div className={UI.panel}>
//                                           <div className={UI.content}>
//                                                 <div className={UI.searchWrapper}>
//                                                       <label htmlFor="pokemon-search" className={UI.searchLabel}>
//                                                             Search Pokemon
//                                                       </label>

//                                                       <input
//                                                             id="pokemon-search"
//                                                             type="search"
//                                                             value={search}
//                                                             onChange={handleSearch}
//                                                             placeholder="e.g. pikachu"
//                                                             className={UI.search}
//                                                       />
//                                                 </div>

//                                                 {filteredPokemon.length === 0 ? (
//                                                       <p className={UI.empty}>No Pokemon found.</p>
//                                                 ) : (
//                                                       <div className={UI.list}>
//                                                             {filteredPokemon.map((pokemon) => (
//                                                                   <PokemonListItem
//                                                                         key={pokemon.id}
//                                                                         pokemon={pokemon}
//                                                                         selected={pokemon.id === selectedId}
//                                                                         onClick={() => handleSelect(pokemon)}
//                                                                   />
//                                                             ))}
//                                                       </div>
//                                                 )}
//                                           </div>
//                                     </div>
//                               </section>
//                         </div>
//                   </div>
//             </main>
//       );
// }

// export default Pokedexx;
