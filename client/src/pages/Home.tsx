import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";

import Json from "../components/Jason";

export default function Home() {
      return (
            <div className="min-h-screen flex items-center px-6 md:px-16 py-6">
                  <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
                        {/* Introduction */}
                        <div className="flex flex-col gap-7">
                              <p className="text-sm text-stone-400">Hello, I'm</p>

                              <div className="flex flex-col gap-3">
                                    <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-100">
                                          Jerald Llona<span className="text-stone-500">.</span>
                                    </h1>

                                    <h2 className="text-lg text-stone-300">Developer & Digital Artist</h2>
                              </div>

                              <p className="text-stone-400 leading-6 text-sm max-w-lg">
                                    I'm a developer and artist interested in building meaningful digital experiences and
                                    expressing creativity through technology and art.
                              </p>

                              <div className="flex flex-wrap items-center gap-4 pt-2">
                                    <Link
                                          to="/hobbies"
                                          className="flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-900 rounded-lg hover:bg-white transition">
                                          Explore my interests
                                          <ArrowUpRight size={17} />
                                    </Link>

                                    <a
                                          href="mailto:your@email.com"
                                          className="flex items-center gap-2 px-4 py-2 border border-stone-700 text-stone-300 rounded-lg hover:bg-stone-800 transition">
                                          <Mail size={17} />
                                          Contact me
                                    </a>
                              </div>

                              <div className="flex items-center gap-5 pt-5 ">
                                    <a
                                          href="https://github.com/yourusername"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="text-sm text-stone-400 hover:text-white transition">
                                          GitHub ↗
                                    </a>

                                    <a
                                          href="https://instagram.com/yourusername"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="text-sm text-stone-400 hover:text-white transition">
                                          Instagram ↗
                                    </a>
                              </div>
                        </div>

                        {/* Artwork Background */}

                        <Json></Json>
                       
                  </div>
            </div>
      );
}
