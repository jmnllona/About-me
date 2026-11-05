import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Pokemon } from "../types/pokemon";
import pokemon_data from "../data/pokemonData.json";

interface PokedexContextType {
      pokemonData: Pokemon[];
      setPokemonData: (pokemon: Pokemon[]) => void;
      getPokemon: (id: number) => Pokemon;
}

const PokedexContext = createContext<PokedexContextType | undefined>(undefined);

interface PokedexProviderProps {
      children: ReactNode;
}

export function PokedexProvider({ children }: PokedexProviderProps) {
      const [pokemonData, setPokemonData] = useState<Pokemon[]>(pokemon_data);

      function getPokemon(id: number) {
            const index = pokemonData.findIndex((pokemon) => pokemon.id === id);
            return pokemonData[index];
      }

      const pokedexValue: PokedexContextType = {
            pokemonData,
            setPokemonData,
            getPokemon,
      };

      return <PokedexContext.Provider value={pokedexValue}>{children}</PokedexContext.Provider>;
}

export function usePokedexContext(): PokedexContextType {
      const context = useContext(PokedexContext);

      if (context === undefined) {
            throw new Error(
                  "useAppContext must be used within an <PokedexProvider>. " +
                        "Make sure your component is rendered inside <PokedexProvider> in main.tsx.",
            );
      }

      return context;
}
