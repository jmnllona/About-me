import { useState } from "react";
import {
      House,
      Shapes,
      Gamepad2,
      Palette,
      Music2,
      ChevronRight,
      ChevronDown,
      Mail,
      ExternalLink,
      Code2,
      ArrowUpRight,
} from "lucide-react";

import NavLink from "./NavLink";
import { useAuth } from "../auth/AuthContext";
import { MusicButton } from "./Buttons";

export default function MainHeader() {

      const [music , setMusic] = useState();
    
   
      return (<header className="fixed  top-0 left-0  w-full  bg-stone-950 h-12 z-50 flex items-center px-5 border-b border-stone-700">

            <h1 className=""></h1>

<div className="flex items-center justify-center w-10 "><MusicButton /></div>



      </header>
       
      );
}
