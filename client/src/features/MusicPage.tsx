import { ExternalLink } from "lucide-react";


const playlists = [
      {
            lang: "EN",
            title: 'Lang="En"',
            description: "English, but not always ordinary. Songs that feel dreamy, distant, and almost unreal.",
            symbol: "✳",
            url: "https://open.spotify.com/playlist/7wSaBwQaQXRp7XafuqU4ng?si=ffae5fcc7efd4990",
      },
      {
            lang: "FIL",
            title: 'Lang="Fil"',
            description: "Mga kantang bumabagay sa iba't ibang mood at sandali.",
            symbol: "☼",
            url: "https://open.spotify.com/playlist/2tlraDhZNGSMWWI1A6ZCR1?si=14b33bd838ad4384",
      },
      {
            lang: "JP",
            title: "😭😢😓👉🏿👈🏿🍑",
            subtitle: "Inside a Dream",
            description: "A little escape from reality. Music that feels like another world.",
            symbol: "☾",
            url: "https://open.spotify.com/playlist/18q48gcUI5oqc0kPyELtI3?si=3f188334c3724eaf",
      },
      {
            lang: "KR",
            title: "Papipapipoom",
            description: "The playlist I always come back to. Maybe this is the real soundtrack of my life.",
            symbol: "♫",
            url: "https://open.spotify.com/playlist/6iW7by16XkCgUifvVPa8qH?si=45231e5aebc44518",
      },
];

const topArtists = [
      {
            name: "Silent Sanctuary",
            role: "Artist",
            image: "/images/artists/silent_sanctuary.jpe",
            url: "https://open.spotify.com/artist/4nGp682WMiKS4X217kPw8C?si=dd90b03e70764728",
      },
      {
            name: "Anna Kendrick",
            role: "Artist",
            image: "/images/artists/anna_kendrick.jpe",
            url: "https://open.spotify.com/artist/6xfqnpe2HnLVUaYXs2F8YS?si=2RrQ3yGLTAeDrZ6M1bm5ug",
      },
      {
            name: "Olivia Rodrigo",
            role: "Artist",
            image: "/images/artists/olivia_rodrigo.jpg",
            url: "https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG?si=76b9d60042934cc5",
      },
        {
            name: "Avril Lavigne",
            role: "Artist",
            image: "/images/artists/avril_lavigne.jpe",
            url: "https://open.spotify.com/artist/0p4nmQO2msCgU4IF37Wi3j?si=W4jjcW--R6GPJS87DJTXpg",
      },
        {
            name: "Mandy Moore",
            role: "Artist",
            image: "/images/artists/silent_sanctuary.jpe",
            url: "",
      },
      {
            name: "Lana Del Rey",
            role: "Artist",
            image: "/images/artists/lana-del-rey.jpg",
            url: "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa?si=d29d1bb0a5304cb2",
      },
      {
            name: "Red Velvet",
            role: "Artist",
            image: "/images/artists/red-velvet.png",
            url: "https://open.spotify.com/artist/1z4g3DjTBBZKhvAroFlhOM?si=dcea96da2a894c8b",
      },
];

export default function MusicPage() {

   
      return (
            <div className="mx-auto flex max-w-4xl flex-col gap-8 p-2  text-white md:p-10">
                  {/* <header className="flex flex-col gap-3 border-b border-stone-700 pb-6">
                              <p className="text-xs font-medium uppercase tracking-widest text-stone-500">
                                    Personal Archive / 001
                              </p>

                              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">A WORLD OF MY OWN.</h1>

                              <p className="max-w-md text-sm text-stone-600 md:text-base">
                                    A little collection of sounds, moods, and songs that somehow feel like me.
                              </p>
                        </header> */}

                  <section className="flex flex-col gap-4">
                        <div className="flex items-end justify-between gap-4">
                              <div>
                                    <h2 className="text-xl font-bold">Top artists</h2>
                              </div>

                              <span className="shrink-0 text-xs text-stone-500">{topArtists.length} artists</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                              {topArtists.map((artist) => (
                                    <a
                                          key={artist.name}
                                          href={artist.url}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="group rounded-xl p-3 transition relative">
                                          <img
                                                src={artist.image}
                                                alt={artist.name}
                                                className="aspect-square w-full rounded-full object-cover"
                                          />

                                          <h3 className="mt-3 truncate font-semibold text-base">{artist.name}</h3>

                                          <p className="text-xs text-stone-500">{artist.role}</p>
                                          <div className="inset-0 scale-90 -z-10 rounded-md group-hover:scale-100 transition group-hover:bg-stone-800 absolute"></div>
                                    </a>
                              ))}
                        </div>
                  </section>

                  {/* //soundtrack */}

                  <section className="flex flex-col gap-4">
                        <div>
                              <h2 className="text-xl font-bold">Your Playlists</h2>
                        </div>

                        <div className="grid  gap-3 lg:gap-2 lg:grid-cols-2 ">
                              {playlists.map((playlist, index) => (
                                    <a
                                          key={playlist.lang}
                                          href={playlist.url}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="group border overflow-hidden border-stone-700 flex items-center gap-4 rounded-md bg-stone-800 pr-4 transition hover:border-stone-700/50 hover:bg-stone-700/50">
                                          <div className="flex   h-16 w-16 shrink-0 items-center justify-center  bg-stone-200">
                                                <img
                                                      className="w-full h-full block object-cover"
                                                      src={playlist.symbol}
                                                      alt={"cover" + index + 1}
                                                />
                                          </div>

                                          <div className="min-w-0 flex-1">
                                                <h3 className="font-semibold mb-1 text-sm ">{playlist.title}</h3>
                                                <p className="text-xs  tracking-wider text-stone-500">
                                                      {playlist.lang} / {}
                                                </p>
                                          </div>

                                          <span className="text-xl transition group-hover:-translate-y-1 group-hover:translate-x-1 ">
                                                <ExternalLink size={15} strokeWidth={1.5} />
                                          </span>
                                    </a>
                              ))}
                        </div>
                  </section>

                  <footer className="border-t border-stone-700 pt-4 text-xs text-stone-500">
                        FOUR PLAYLISTS · ONE PERSONAL SOUNDTRACK
                  </footer>
            </div>
      );
}
