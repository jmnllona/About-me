
import { Nav } from "../component/index";



type PokemonGame = {
  image: string;
  title: string;
  synopsis: string;
  screenshots: string[];
};

const data: PokemonGame[] = [
  {
    image: "/images/pokemon/roms/pokemon_fire_red.jpg",
    title: "Pokemon FireRed",
    synopsis:
      "Return to Kanto, challenge its Gym Leaders, and take on Team Rocket. I've replayed this one countless times, especially with different ROM hacks. It's a game I always come back to.",
    screenshots: [
      "/images/pokemon/screenshots/fire-red-1.jpg",
      "/images/pokemon/screenshots/fire-red-2.jpg",
      "/images/pokemon/screenshots/fire-red-3.jpg",
    ],
  },
  {
    image: "/images/pokemon/roms/pokemon_emerald.jpg",
    title: "Pokemon Emerald",
    synopsis:
      "Explore Hoenn and uncover the conflict between Team Magma and Team Aqua. One of the most nostalgic games I've played. The soundtrack alone brings back so many memories.",
    screenshots: [
      "/images/pokemon/screenshots/emerald-1.jpg",
      "/images/pokemon/screenshots/emerald-2.jpg",
    ],
  },
  {
    image: "/images/pokemon/roms/pokemon_ash_gray.jpg",
    title: "Pokemon Ash Gray",
    synopsis:
      "Follow Ash Ketchum's journey through Kanto, inspired by the anime. I haven't finished this one yet, but experiencing Ash's adventures is a fun change from the usual Pokemon games.",
    screenshots: [
      "/images/pokemon/screenshots/ash-gray-1.jpg",
      "/images/pokemon/screenshots/ash-gray-2.jpg",
    ],
  },
  {
    image: "/images/pokemon/roms/pokemon_light_platinum.jpg",
    title: "Pokemon Light Platinum",
    synopsis:
      "Explore the Zhery and Lauren regions, challenge new Gym Leaders, and work toward the Pokemon World Championship. I've replayed this one several times. The maps, cities, and storyline make it memorable. I'd like to try the NDS version someday.",
    screenshots: [
      "/images/pokemon/screenshots/light-platinum-1.jpg",
      "/images/pokemon/screenshots/light-platinum-2.jpg",
    ],
  },
  {
    image: "/images/pokemon/roms/pokemon_glazeed.jpg",
    title: "Pokemon Glazed",
    synopsis:
      "Explore Tunod and venture into other regions as the story unfolds. I remember enjoying this ROM hack, although I've forgotten most of the details. Maybe it's time for another playthrough.",
    screenshots: [
      "/images/pokemon/screenshots/glazed-1.jpg",
      "/images/pokemon/screenshots/glazed-2.jpg",
    ],
  },
  {
    image: "/images/pokemon/roms/pokemon_platinum.jpg",
    title: "Pokemon Platinum",
    synopsis:
      "Journey through Sinnoh and uncover the mysteries surrounding Team Galactic, Giratina, and the Distortion World. A memorable adventure with a great atmosphere and soundtrack.",
    screenshots: [
      "/images/pokemon/screenshots/platinum-1.jpg",
      "/images/pokemon/screenshots/platinum-2.jpg",
    ],
  },
  {
    image: "/images/pokemon/roms/pokemon_gaia.webp",
    title: "Pokemon Gaia",
    synopsis:
      "Explore the Orbtus region, investigate mysterious earthquakes, and uncover the secrets of an ancient civilization. Its world design and modernized gameplay are what make this ROM hack stand out to me.",
    screenshots: [
      "/images/pokemon/screenshots/gaia-1.jpg",
      "/images/pokemon/screenshots/gaia-2.jpg",
    ],
  },
];

function GameCard({
  game,
  index,
}: {
  game: PokemonGame;
  index: number;
}) {
  return (
    <article className="min-w-0 overflow-hidden rounded-lg border border-stone-700 bg-stone-800/70">
      {/* Cover */}
      <div className=" pb-0">
        <div className="flex h-48 items-center justify-center overflow-hidden rounded-md bg-stone-900">
          <img
            src={game.image}
            alt={`${game.title} cover`}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Description */}
      <div className="p-4">
        <p className="mb-2 text-xs tracking-widest text-stone-500">
          GAME / {String(index + 1).padStart(2, "0")}
        </p>

        <h2 className="text-lg font-semibold text-stone-200">
          {game.title}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-stone-400">
          {game.synopsis}
        </p>
      </div>

      {/* Screenshots */}
      {game.screenshots.length > 0 && (
        <div className="px-4 pb-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xs font-medium tracking-wider text-stone-400">
              GAMEPLAY ARCHIVE
            </h3>

            <span className="text-xs text-stone-600">
              {String(game.screenshots.length).padStart(2, "0")} captures
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {game.screenshots.map((screenshot, i) => (
              <img
                key={screenshot}
                src={screenshot}
                alt={`${game.title} gameplay screenshot ${i + 1}`}
                loading="lazy"
                className="aspect-video w-full rounded-md border border-stone-700 bg-stone-900 object-cover transition hover:border-stone-500"
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default function PokemonGames() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 md:px-6 py-16">
      <Nav></Nav>
      {/* Header */}
      <div className="mb-8 mt-6 border-b border-stone-800 pb-6">

        <h1 className="text-3xl  tracking-tight text-stone-200 sm:text-4xl">
          Roms
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-400">
          A collection of adventures, favorite games, and little moments
          worth remembering.
        </p>
      </div>

      {/* Game grid */}
      {data.length === 0 ? (
        <p className="py-12 text-center text-sm text-stone-500">
          No games added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {data.map((game, index) => (
            <GameCard key={game.title} game={game} index={index} />
          ))}
        </div>
      )}

      {/* Footer */}
      <p className="mt-10 text-center text-xs tracking-wide text-stone-600">
        END OF COLLECTION — MORE ADVENTURES TO COME
      </p>
    </section>
  );
}