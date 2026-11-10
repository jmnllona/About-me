import { useState } from "react";

// ---------- Types ----------
export interface ModItem {
      id: number | string;
      name: string;
      image: string;
      description: string;
      meta?: Record<string, string>;
}

interface ModPanelProps {
      heading?: string;
      items?: ModItem[];
}

interface RustedProps {
      items?: ModItem[];
}

// ---------- Sample data (replace via the `items` prop) ----------
const img = (seed: string): string => `https://picsum.photos/seed/${seed}/900/700`;

const defaultItems: ModItem[] = [
      {
            id: 1,
            name: "Prototype Walker",
            image: img("prototype-walker"),
            description:
                  "A heavy bipedal walker built around a sniper cannon turret. Slow to reposition, but its long-range shots punish anything that stays in the open.",
            meta: { Type: "Land unit", Cost: "$1,800", Health: "1,400", Range: "Long", Build: "45s" },
      },
      {
            id: 2,
            name: "Sniper Turret",
            image: img("sniper-turret"),
            description:
                  "A fixed turret with a visible recoil animation on every shot. High damage per hit with a slow rate of fire, best placed behind defensive lines.",
            meta: { Type: "Defense", Cost: "$900", Health: "800", Range: "Long", Build: "25s" },
      },
      {
            id: 3,
            name: "Nano Turret",
            image: img("nano-turret"),
            description:
                  "A compact support turret that repairs nearby friendly units and structures. Does no damage, but keeps frontline units alive far longer.",
            meta: { Type: "Support", Cost: "$600", Health: "500", Range: "Short", Build: "20s" },
      },
      {
            id: 4,
            name: "Scout Hover",
            image: img("scout-hover"),
            description:
                  "A light, fast hovercraft for early map control. Fragile in a fight, but ideal for scouting and picking off undefended builders.",
            meta: { Type: "Hover unit", Cost: "$350", Health: "300", Range: "Short", Build: "10s" },
      },
      {
            id: 5,
            name: "Siege Crawler",
            image: img("siege-crawler"),
            description:
                  "Armored artillery on tracks. It must stop to fire, so it needs escorts, but it can break fortified positions from outside their range.",
            meta: { Type: "Land unit", Cost: "$1,400", Health: "1,100", Range: "Very long", Build: "38s" },
      },
      {
            id: 6,
            name: "Repair Drone",
            image: img("repair-drone"),
            description:
                  "A small flying drone that follows a group and slowly repairs it. Low health, so keep it behind the main force and protect it from air attacks.",
            meta: { Type: "Air unit", Cost: "$500", Health: "250", Range: "None", Build: "15s" },
      },
];

// ---------- Right panel ----------
function ModPanel({ heading = "Your mods", items = defaultItems }: ModPanelProps) {
      const [selectedId, setSelectedId] = useState<ModItem["id"] | undefined>(items[0]?.id);

      if (items.length === 0) return null;
      const selected = items.find((item) => item.id === selectedId) ?? items[0];

      return (
            <div className="h-full min-h-0 min-w-0  text-[color:var(--text)]">
                  {/* Header */}
                  <header className="shrink-0 mb-3">
                        <h2 className="text-2xl font-semibold text-[color:var(--text-strong)] tracking-tight">{heading}</h2>
                  </header>
                  <div className="flex gap-4">

                        {/* DIV 1 (2/3): description + meta on top, image below, 50/50 */}
                        <div className="flex-[2] min-h-0 flex flex-col gap-4 bg-[color:var(--bg-2)] p-3">
                              <div className="flex-1 min-h-0 overflow-y-auto">
                                    <h3 className="text-md font-semibold">{selected.name}</h3>
                                    <p className="mt-2 leading-relaxed  text-sm text-[color:var(--text-muted)]">{selected.description}</p>

                                    {selected.meta && (
                                          <dl className="mt-4 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
                                                {Object.entries(selected.meta).map(([label, value]) => (
                                                      <div
                                                            key={label}
                                                            className="flex items-baseline justify-between py-1 text-sm">
                                                            <dt className="text-sm text-[color:var(--text-faint)]">{label}</dt>
                                                            <dd className="text-sm font-medium">{value}</dd>
                                                      </div>
                                                ))}
                                          </dl>
                                    )}
                              </div>

                              <div className="flex-1 min-h-0 overflow-hidden rounded-2xl bg-[color:var(--media-bg)]">
                                    <img
                                          key={selected.id}
                                          src={selected.image}
                                          alt={selected.name}
                                          draggable={false}
                                          className="h-full w-full object-cover"
                                    />
                              </div>
                        </div>

                        {/* DIV 2 (1/3): scrollable 2-column grid of picture + small name */}
                        <div className="flex-[1] min-h-0 overflow-y-auto">
                              <div className="grid grid-cols-2 gap-3">
                                    {items.map((item) => {
                                          const active = item.id === selected.id;
                                          return (
                                                <button
                                                      key={item.id}
                                                      type="button"
                                                      aria-pressed={active}
                                                      onClick={() => setSelectedId(item.id)}
                                                      className={[
                                                            "overflow-hidden rounded border text-left transition-colors",
                                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]",
                                                            active
                                                                  ? "border-[color:var(--text)]"
                                                                  : "border-[color:var(--border)] hover:border-[color:var(--border-strong)]",
                                                      ].join(" ")}>
                                                      <img
                                                            src={item.image}
                                                            alt=""
                                                            draggable={false}
                                                            className="aspect-video w-full object-cover"
                                                      />
                                                      <span className="block truncate px-2 py-1.5 text-xs font-medium">
                                                            {item.name}
                                                      </span>
                                                </button>
                                          );
                                    })}
                              </div>
                        </div>
                  </div>
            </div>
      );
}

// ---------- Page ----------
export default function Rusted({ items = defaultItems }: RustedProps) {
      return (
            <div className="h-full px-10 flex flex-col lg:flex-row gap-8 text-[color:var(--text)]">
                  {/* Main*/}
                  <div className="flex-1 min-h-0 min-w-0 overflow-y-auto">
                        <h1 className="text-4xl font-semibold tracking-tight">Rusted Warfare Mods</h1>

                        <p className="mt-4 max-w-prose leading-relaxed text-[color:var(--text-muted)]">
                              A collection of custom units and modifications for Rusted Warfare, a real-time strategy
                              game developed by Corroding Games. Each mod is designed to extend the base game with new
                              units, weapons and behaviors while staying true to its original style.
                        </p>

                        <p className="mt-3 max-w-prose leading-relaxed text-[color:var(--text-muted)]">
                              Browse the collection on the right to see each mod in detail. All mods are free to
                              download and use.
                        </p>

                        <a
                              href="/downloads/my-mods.zip"
                              download="my-mods.zip"
                              className="mt-8 inline-flex items-center  rounded bg-[color:var(--download-bg)] text-[color:var(--download-text)]  px-5 py-2 text-sm font-medium  active:transition  active:scale-95  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]">
                              Download mods
                        </a>

                        <p className="mt-10 max-w-prose text-xs leading-relaxed text-[color:var(--text-faint)]">
                              These are unofficial, fan-made modifications. They are not affiliated with, endorsed by,
                              or supported by Corroding Games. Rusted Warfare is a trademark of its respective owner. To
                              play, you need to own the game, available on Steam and Google Play.
                        </p>
                  </div>

                  {/* Right half: mod panel */}
                  <div className="flex-1 min-h-0 min-w-0">
                        <ModPanel heading="Units" items={items} />
                  </div>
            </div>
      );
}