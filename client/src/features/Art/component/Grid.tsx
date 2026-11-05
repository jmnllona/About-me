
import type { Artwork } from "../index";
function GridButton({
  artwork,
  onClick,
}: {
  artwork: Artwork;
  onClick?: (artwork: Artwork) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(artwork)}
      aria-label={artwork.title ?? "View artwork"}
      className="mb-1 block w-full break-inside-avoid overflow-hidden rounded-md bg-stone-100"
    >
      <img
        src={artwork.image}
        alt={artwork.title ?? ""}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full object-cover transition duration-300 hover:scale-[1.03]"
      />
    </button>
  );
}

export default function Grid({
  data,
  onImageClick,
}: {
  data: Artwork[];
  onImageClick?: (artwork: Artwork) => void;
}) {
  return (
    <div className="columns-2 gap-1 md:columns-4 lg:columns-5">
      {data.length === 0 ? (
        <p className="py-10 text-center text-sm text-stone-500">
          No artwork found
        </p>
      ) : (
        data.map((artwork) => (
          <GridButton
            key={artwork.id}
            artwork={artwork}
            onClick={onImageClick}
          />
        ))
      )}
    </div>
  );
}
