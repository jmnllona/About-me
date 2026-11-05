import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


export default function Nav() {
    return (
        <div className="flex">

            <NavLink
                to="/hobbies/games/pokedex"
                end
                className={({ isActive }) =>
                    `group flex items-center gap-2 border p-2 py-1 transition-colors text-sm w-full max-w-[150px] ${
                        isActive
                            ? "bg-stone-300 border-stone-300 text-stone-900"
                            : "bg-stone-800 border-stone-700 text-white"
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        {isActive && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    d="M3 12a9 9 0 0 1 18 0h-6a3 3 0 0 0-6 0h-6z"
                                    fill="currentColor"
                                    stroke="none"
                                />
                                <circle cx="12" cy="12" r="9" fill="none" />
                                <path d="M3 12h6M15 12h6" fill="none" />
                                <circle cx="12" cy="12" r="3" fill="none" />
                            </svg>
                        )}
                        <span className="group-hover:underline underline-offset-4 ">Pokedex</span>
                    </>
                )}
            </NavLink>

            <NavLink
                to="/hobbies/games/pokedex/roms"
                end
                className={({ isActive }) =>
                    `group flex items-center gap-2 border p-2 py-1 transition-colors text-sm w-full max-w-[150px] ${
                        isActive
                            ? "bg-stone-300 border-stone-300 text-stone-900"
                            : "bg-stone-800 border-stone-700 text-white"
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        {isActive && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    d="M3 12a9 9 0 0 1 18 0h-6a3 3 0 0 0-6 0h-6z"
                                    fill="currentColor"
                                    stroke="none"
                                />
                                <circle cx="12" cy="12" r="9" fill="none" />
                                <path d="M3 12h6M15 12h6" fill="none" />
                                <circle cx="12" cy="12" r="3" fill="none" />
                            </svg>
                        )}
                        <span className="group-hover:underline underline-offset-4 ">Roms</span>
                    </>
                )}
            </NavLink>

        </div>
    );
}
