import { Route, Routes } from "react-router-dom";
import PokemonRoutes from "../pokedex/routes/PokemonRoutes";

export default function GamesRoutes() {
      return (
            <Routes>
                  <Route path="pokedex/*" element={<PokemonRoutes/>} />
                  {/* <Route path="/rusted-warfare/" element={} /> */}
            </Routes>
      );
}
