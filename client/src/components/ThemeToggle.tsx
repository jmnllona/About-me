import { useApp } from "../context/AppContext"; // adjust to your real path
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({className }: {className : string}) {
  const { theme, toggleTheme } = useApp();
  const isDark = theme === "dark";
  const next = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => toggleTheme()}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`${isDark? "bg-black pl-6 before:bg-neutral-700" : "bg-white pr-6 before:bg-neutral-400"}
       flex relative px-1 py-1 text-white  items-center justify-center rounded-full
        border-gray-400 transition-[transform,padding] active:scale-95 focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-stone-900/40
         before:w-6 before:h-1 before:absolute  before:rounded-full before:left-2 before:right-1 before:z-0 
         ${className}
      `}
    >


                  {isDark ? <Moon  size={15} strokeWidth={2}  className="text-white shrink-0 z-10 bg-inherit"/>
       
       : <Sun  size={15} strokeWidth={2}  className="text-neutral-700 z-10 bg-inherit"/>
      
      }
     

    </button>
  );
}