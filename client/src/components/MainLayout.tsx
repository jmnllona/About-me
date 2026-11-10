import { Outlet } from "react-router-dom";
import MainSidebar from "./MainSideBar";
import MainHeader from "./MainHeader";
import { useApp } from "../context/AppContext";
export default function MainLayout() {
      const { isMenuOpen } = useApp();
      return (
            <>
                  <MainSidebar></MainSidebar>

                  <main className={` ${ isMenuOpen ? "md:ml-64" : ""}  pt-12`}>
                        <MainHeader></MainHeader>

                        <Outlet />
                  </main>
            </>
      );
}
