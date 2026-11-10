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
import { useApp } from "../context/AppContext";

export default function MainSidebar() {
      const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);
      const [isGamesOpen, setIsGamesOpen] = useState(false);
      const { user, loading, logout } = useAuth();
      const {isMenuOpen , toggleMenu} = useApp();

      const subLinkStyle = "flex items-center gap-1.5 rounded-lg px-2 py-1  hover:bg-stone-transition-colors";

      return (
            <aside className={`${ isMenuOpen ? "w-64 px-6   " : "w-0 px-0"}  fixed left-0 top-0 hidden overflow-hidden h-screen border-r py-6 border-[color:var(--border)] bg-[color:var(--card)]  md:flex z-40 `}>
                  <nav className="flex  flex-col gap-3 text-xs font-semibold mt-20 flex-1">
                        {/* Home */}
                        <NavLink to="/" className={subLinkStyle} end>
                              <House size={15} strokeWidth={1.5} />
                              Home
                        </NavLink>

                        {/* Hobbies */}
                        <div>
                              <div className="flex items-center">
                                    <button
                                          className={`${subLinkStyle} text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)] flex-1`}
                                          onClick={() => setIsHobbiesOpen(true)}>
                                          <Shapes size={15} strokeWidth={1.5} />
                                           Hobbies
                                    </button>

                                    <button
                                          type="button"
                                          onClick={() => setIsHobbiesOpen((prev) => !prev)}
                                          aria-label={isHobbiesOpen ? "Close Hobbies menu" : "Open Hobbies menu"}
                                          aria-expanded={isHobbiesOpen}
                                          className="rounded p-1 text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)]">
                                          {isHobbiesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                    </button>
                              </div>

                              {isHobbiesOpen && (
                                    <div className="ml-3 mt-3 flex flex-col gap-2 border-l border-[color:var(--border-strong)] pl-4 font-normal">
                                          {/* Pokemon */}
                                          <div>
                                                <div className="flex items-center">
                                                      <button
                                                            className={`${subLinkStyle} text-[color:var(--text-muted)] flex-1`}
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
                                                            className="rounded p-1 text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)]">
                                                            {isGamesOpen ? (
                                                                  <ChevronDown size={16} />
                                                            ) : (
                                                                  <ChevronRight size={16} />
                                                            )}
                                                      </button>
                                                </div>

                                                {isGamesOpen && (
                                                      <div className="ml-3 mt-3 flex flex-col gap-2 border-l border-[color:var(--border-strong)] pl-4">
                                                            <NavLink
                                                                  to="/hobbies/games/pokedex"
                                                                  className={subLinkStyle}
                                                                  >
                                                                  Pokemon
                                                            </NavLink>

                                                            <NavLink
                                                                  to="/hobbies/games/rusted-warfare"
                                                                  className={subLinkStyle}>
                                                                 <span className="truncate">Rusted Warfare</span> 
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
                        <div className="mt-auto mb-3  ">
                              <p className="mb-3 px-3 text-xs font-normal uppercase tracking-widest text-[color:var(--text-faint)]">
                                    Explore
                              </p>

                              <div className="flex flex-col gap-1 font-normal">
                                    {!loading &&
                                          (user ? (
                                                <>
                                                      <p className="px-3 py-2 text-xs text-[color:var(--text-muted)]">
                                                            Signed in as {user.username}
                                                      </p>
                                                      <button
                                                            type="button"
                                                            onClick={() => void logout()}
                                                            className="rounded-lg px-3 py-2 text-left text-[color:var(--text-muted)] hover:bg-[color:var(--item-hover)] hover:text-[color:var(--text)]">
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
                                          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[color:var(--text-muted)] transition-colors hover:bg-[color:var(--item-hover)] hover:text-[color:var(--text)]">
                                          <ExternalLink size={15} strokeWidth={1.5} />
                                          Portfolio
                                          <ArrowUpRight size={14} className="ml-auto" />
                                    </a>

                                    <a
                                          href="https://github.com/jmnllona"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[color:var(--text-muted)] transition-colors hover:bg-[color:var(--item-hover)] hover:text-[color:var(--text)]">
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