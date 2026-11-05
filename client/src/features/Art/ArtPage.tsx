import { useState } from "react";
import Grid from "./component/Grid";
import type { Artwork } from "./index";

const artworks: Artwork[] = Array.from({ length: 120 }, (_, i) => ({
      id: i + 1,
      title: `Artwork ${i + 1}`,
      type: i % 2 === 0 ? "Digital art" : "Traditional art",
      image: `https://picsum.photos/seed/art${i + 1}/400/${300 + (i % 4) * 100}`,
}));

export default function ArtPage() {
      const [visibleCount, setVisibleCount] = useState(30);
      const [modal, setModal] = useState<boolean>(false);
      const [currentArtwork, setCurrentArtwork] = useState<Artwork | null>(null);

      const visibleArtworks = artworks.slice(0, visibleCount);

      function handleImageClick(artwork: Artwork) {
            setModal(true);
            setCurrentArtwork(artwork);
      }

      return (
            <>
                  <main className="mx-auto w-full max-w-6xl p-6  ">
                        <header className="mb-8">
                              <h1 className="text-2xl font-semibold text-white">Art Gallery</h1>
                              <p className="mt-2 text-sm text-stone-400">
                                    A collection of digital art, traditional art, and experiments.
                              </p>
                        </header>

                        <Grid data={visibleArtworks} onImageClick={handleImageClick} />
                        {visibleCount < artworks.length && (
                              <button
                                    type="button"
                                    onClick={() => setVisibleCount((count) => count + 30)}
                                    className="mx-auto mt-8 block text-sm text-white hover:text-stone-400">
                                    Load more
                              </button>
                        )}
                  </main>

                 {modal && (
  <div
    onClick={() => setModal(false)}
    className="fixed inset-0 md:left-64 bg-stone-900/70 flex justify-center items-center p-4 z-50"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-w-2xl w-full bg-stone-800 rounded-lg overflow-hidden shadow-xl"
    >
      {/* Image */}
      <div className="w-full h-[500px] max-h-[70vh] flex justify-center items-center p-2">
        <img
          src={currentArtwork?.image}
          alt={currentArtwork?.title}
          className="max-w-full max-h-full w- h-auto object-contain rounded-md"
        />
      </div>

      {/* Description */}
      <div className="p-6 text-white border-t border-stone-700">
        <p className="text-stone-500 text-xs mb-2">
          ARTWORK / {String(currentArtwork?.id).padStart(3, "0")}
        </p>

        <h2 className="text-xl font-semibold">
          {currentArtwork?.title}
        </h2>

        <p className="text-cyan-500 text-sm mt-1">
          {currentArtwork?.type}
        </p>

        {/* Optional design */}
        <div className="mt-5 flex items-center gap-2 text-stone-500 text-xs">
          <span>✳</span>
          <span>Personal collection · Digital archive</span>
        </div>
      </div>
    </div>
  </div>
)}
            </>
      );
}
