import { useState, useEffect } from "react";

const data = [
      {
            image: "/images/pokemon/roms/pokemon_fire_red.jpg",
            title: "Pokemon Fire Red",
            synopsis: "Pokemon fire red is a very Popular GBA Rom. I have played this a lot of times with different Romhacks",
      },
      {
            image: "/images/pokemon/roms/pokemon_emerald.jpg",
            title: "Pokemon Emerald",
            synopsis: "Pokemon Emeral might be the most Popular GBA ROM. Soundtrack are very nostalgic as its one of the very first Rom i played.",
      },
      {
            image: "../images/pokemon/roms/pokemon_ash_gray.jpg",
            title: "Pokemon Ash Gray",
            synopsis: "Very obvious coming from the title. This Rom Follows Ash Adventures from Kanto Region. I hanven't finished this yet.",
      },
      {
            image: "/images/pokemon/roms/pokemon_light_platinum.jpg",
            title: "Pokemon Light Platinum",
            synopsis: "Played this a lot of times too. Giratina story. The map and the cities are great. Great storyline.  This one has an NDS version too and i probably will play it soon",
      },
      {
            image: "/images/pokemon/roms/pokemon_glazeed.jpg",
            title: "Pokemon Glazed",
            synopsis: "Sinnoh region. Great storyline though i've already forgotten about it.",
      },
      {
            image: "/images/pokemon/roms/pokemon_platinum.jpg",
            title: "Pokemon Platinum",
            synopsis: "",
      },
      {
            image: "/images/pokemon/roms/pokemon_gaia.webp",
            title: "Pokemon Gaia",
            synopsis: "",
      },
];

export function ImageSlider() {
      const [index, setIndex] = useState<number>(0);

      const prevPage = () => {
            if (index > 0) setIndex(index - 1);
      };

      const nextPage = () => {
            if (index < data.length - 1) setIndex(index + 1);
      };

      const current = data[index];

      return (
            <section className="max-w-lg w-full px-5 py-16 mx-auto">
                  <p className="ml-5 text-gray-600 mb-2">
                        ~{index + 1}/{data.length}~
                  </p>
                  <div id="image-slider" className="">
                        {data.length == 0 ? (
                              <p className=" font-semibold text-sm text-center"> No pictures</p>
                        ) : (
                              <div
                                    id="content-wrapper"
                                    className="grid md:grid-cols-2 shadow-md rounded-lg border p-6 gap-6">
                                    <div className="flex w-full h-full items-center justify-center">
                                          {" "}
                                          <div className=" min-w-min w-52 min-h-0 h-52  ">
                                                {" "}
                                                <img
                                                      src={current.image}
                                                      alt="Pokemon art cover"
                                                      className="w-full h-full rounded-md"
                                                />
                                          </div>
                                    </div>
                                    <div className="h-48 md:h-auto">
                                          <h2 className="text-lg font-bold text-gray-600">{current.title}</h2>
                                          <p>{current.synopsis}</p>
                                    </div>
                              </div>
                        )}

                        <div id="button-field" className="flex items-center justify-center gap-5 m-3 my-4 ">
                              <button
                                    onClick={prevPage}
                                    disabled={index == 0}
                                    className={
                                          "flex justify-center items-center  rounded-full w-full h-8   active:scale-90 transition duration-200 ease-in-out  " +
                                          (index == 0 ? " bg-black/20 text-white" : " shadow-md text-gray-500 border  ")
                                    }>
                                    &lt;
                              </button>
                              <button
                                    onClick={nextPage}
                                    disabled={index == data.length - 1 || data.length == 0}
                                    className={
                                          "flex justify-center items-center rounded-full w-full h-8   active:scale-90 transition duration-200 ease-in-out  " +
                                          (index == data.length - 1 || data.length == 0
                                                ? " bg-black/20 text-white"
                                                : " shadow-md text-gray-500 border ")
                                    }>
                                    &gt;
                              </button>
                        </div>
                  </div>
            </section>
      );
}
