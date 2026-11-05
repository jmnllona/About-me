import { types } from "../data/pokedex_constants";

export default function TypeBadge({ type }: { type: string }) {
      return <div className={`min-w-[50px] rounded-full font-normal px-2  ${types[type]}`}>{type}</div>;
}