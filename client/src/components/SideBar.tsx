import { useState } from "react";
import {
      House,
      Shapes,
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

export default function Sidebar() {
      const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);
      const [isGamesOpen, setIsGamesOpen] = useState(false);
      const { user, loading, logout } = useAuth();

      const subLinkStyle = "flex items-center gap-1.5 rounded-lg px-2 py-1  hover:bg-stone-transition-colors";

      return (
            <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-stone-700 bg-stone-800 p-6 md:block">
                  <nav className="flex h-full flex-col gap-3 text-xs font-semibold">
                        {/* Home */}
                        <NavLink to="/" className={subLinkStyle} end>
                              <House size={15} strokeWidth={1.5} />
                              Home
                        </NavLink>

                        {/* Hobbies */}
                        <div>
                              <div className="flex items-center">
                                    <button
                                          className={`${subLinkStyle} text-stone-400 hover:text-white flex-1`}
                                          onClick={() => setIsHobbiesOpen(true)}>
                                          <Shapes size={15} strokeWidth={1.5} />
                                          Hobbies
                                    </button>

                                    <button
                                          type="button"
                                          onClick={() => setIsHobbiesOpen((prev) => !prev)}
                                          aria-label={isHobbiesOpen ? "Close Hobbies menu" : "Open Hobbies menu"}
                                          aria-expanded={isHobbiesOpen}
                                          className="rounded p-1 text-stone-400 hover:text-white">
                                          {isHobbiesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                    </button>
                              </div>

                              {isHobbiesOpen && (
                                    <div className="ml-3 mt-3 flex flex-col gap-2 border-l border-stone-600 pl-4 font-normal">
                                          {/* Pokemon */}
                                          <div>
                                                <div className="flex items-center">
                                                      <button
                                                            className={`${subLinkStyle} text-stone-400 flex-1`}
                                                            onClick={() => setIsGamesOpen(true)}>
                                                            Games
                                                      </button>

                                                      <button
                                                            type="button"
                                                            onClick={() => setIsGamesOpen((prev) => !prev)}
                                                            aria-label={
                                                                  isGamesOpen ? "Close Games menu" : "Open Games menu"
                                                            }
                                                            aria-expanded={isGamesOpen}
                                                            className="rounded p-1 text-stone-400 hover:text-white">
                                                            {isGamesOpen ? (
                                                                  <ChevronDown size={16} />
                                                            ) : (
                                                                  <ChevronRight size={16} />
                                                            )}
                                                      </button>
                                                </div>

                                                {isGamesOpen && (
                                                      <div className="ml-3 mt-3 flex flex-col gap-2 border-l border-stone-600 pl-4">
                                                            <NavLink
                                                                  to="/hobbies/games/pokedex"
                                                                  className={subLinkStyle}
                                                                  >
                                                                  Pokemon
                                                            </NavLink>

                                                            <NavLink
                                                                  to="/hobbies/games/rusted-warfare"
                                                                  className={subLinkStyle}>
                                                                  Rusted Warfare
                                                            </NavLink>

                                                            
                                                      </div>
                                                )}
                                          </div>

                                          {/* Art */}
                                          <NavLink to="/hobbies/art" className={subLinkStyle}>
                                                <Palette size={15} strokeWidth={1.5} />
                                                Art
                                          </NavLink>
                                    </div>
                              )}
                        </div>

                        {/* Music */}
                        <NavLink to="/music" className={subLinkStyle}>
                              <Music2 size={15} strokeWidth={1.5} />
                              Music
                        </NavLink>

                        {/* Footer */}
                        <div className="mt-auto pb-10">
                              <p className="mb-3 px-3 text-xs font-normal uppercase tracking-widest text-stone-500">
                                    Explore
                              </p>

                              <div className="flex flex-col gap-1 font-normal">
                                    {!loading &&
                                          (user ? (
                                                <>
                                                      <p className="px-3 py-2 text-xs text-stone-400">
                                                            Signed in as {user.username}
                                                      </p>
                                                      <button
                                                            type="button"
                                                            onClick={() => void logout()}
                                                            className="rounded-lg px-3 py-2 text-left text-stone-400 hover:bg-stone-700 hover:text-stone-100">
                                                            Sign out
                                                      </button>
                                                </>
                                          ) : (
                                                <NavLink
                                                      to="/login"
                                                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors">
                                                      <Mail size={15} strokeWidth={1.5} />
                                                      Sign in
                                                </NavLink>
                                          ))}

                                    <NavLink
                                          to="/contact"
                                          className="flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors">
                                          <Mail size={15} strokeWidth={1.5} />
                                          Contact
                                    </NavLink>

                                    <a
                                          href="https://your-portfolio-url.com"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-stone-400 transition-colors hover:bg-stone-700 hover:text-stone-100">
                                          <ExternalLink size={15} strokeWidth={1.5} />
                                          Portfolio
                                          <ArrowUpRight size={14} className="ml-auto" />
                                    </a>

                                    <a
                                          href="https://github.com/your-username"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-stone-400 transition-colors hover:bg-stone-700 hover:text-stone-100">
                                          <Code2 size={15} strokeWidth={1.5} />
                                          GitHub
                                          <ArrowUpRight size={14} className="ml-auto" />
                                    </a>
                              </div>
                        </div>
                  </nav>
            </aside>
      );
}
