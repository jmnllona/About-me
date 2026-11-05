import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import HobbiesRoutes from "../routes/HobbiesRoutes";
import MainLayout from "../components/MainLayout";
import MusicPage from "../features/MusicPage";

import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyEmail from "../pages/VerifyEmail";
export default function AppRouter() {
      return (
            <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />
                  <Route element={<MainLayout></MainLayout>}>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/music/" element={<MusicPage></MusicPage>} />
                        <Route path="/hobbies/*" element={<HobbiesRoutes></HobbiesRoutes>} />
                  </Route>
            </Routes>
      );
}
