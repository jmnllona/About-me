import { Route, Routes } from "react-router-dom";
import PokemonRoutes from "../pokedex/routes/PokemonRoutes";
import Rusted from "../features/games/rusted_warfare/Rusted";

export default function GamesRoutes() {
      return (
            <Routes>
                  <Route path="pokedex/*" element={<PokemonRoutes/>} />
                  <Route path="/rusted-warfare/" element={<Rusted></Rusted>} />
            </Routes>
      );
}
