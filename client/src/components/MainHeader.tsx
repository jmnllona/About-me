import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";
import { useAuth } from "../auth/AuthContext";
import { MusicButton } from "./Buttons";
import { useApp } from "../context/AppContext";

export default function MainHeader() {

      const [music , setMusic] = useState();
      const {toggleMenu} = useApp();
    
   
      return (<header className="fixed  top-0 left-0  w-full  bg-stone-950 h-12 z-50 flex items-center px-5 border-b border-stone-700">

            <h1 className=""></h1>

            <button  onClick={toggleMenu} className="p-2 text-white"> open</button>
            <MusicButton className="ml-auto mr-8" />
             <ThemeToggle className="mr-20 "></ThemeToggle>



      </header>
       
      );
}
