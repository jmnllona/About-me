import { Outlet } from "react-router-dom";
import MainSidebar from "./MainSideBar";

import MainHeader from "./MainHeader";

export default function MainLayout() {
      return (
            <>
                  <MainSidebar></MainSidebar>

                  <main className="md:ml-64 ">
                        <MainHeader></MainHeader>

                        <Outlet />
                  </main>
            </>
      );
}
