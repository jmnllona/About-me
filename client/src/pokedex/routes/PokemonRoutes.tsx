import { Routes, Route } from "react-router-dom";

import { PokedexProvider } from "../context/PokedexContext";
import PokemonInfoPage from "../pages/PokemonInfo";
import PokemonListPage from "../pages/PokemonList";
import  PokemonGames from "../pages/PokemonGames";


export default function PokemonRoutes() {
    return (
        <PokedexProvider>
            <Routes>
                <Route index element={<PokemonListPage />} />
                <Route path=":id" element={<PokemonInfoPage />} />
                    <Route path="/roms" element={<PokemonGames />} />
                  
        
            </Routes>
        </PokedexProvider>
    );
}