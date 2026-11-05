import { Route, Routes } from "react-router-dom";
import GamesRoutes from "./GamesRoutes";
import ArtPage from "../features/Art/ArtPage";


export default function HobbiesRoutes() {
    return (
        <Routes>
            <Route path="games/*" element={<GamesRoutes />} />
            <Route path="art/" element={<ArtPage />} />
        </Routes>
    );
}
