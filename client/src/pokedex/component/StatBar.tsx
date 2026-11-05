import type { StatBarProps } from "../types/pokemon";

export default function StatBar({ value, label, baseTotal, min, max }: StatBarProps) {
      return (
            <div className="flex items-center gap-2">
                  <span className="w-14 shrink-0 text-stone-400">{label}:</span>

                  <span className="w-10 shrink-0 text-center">{value}</span>

                  <div className="h-1.5 w-full bg-stone-700">
                        <div
                              className="h-full bg-blue-400"
                              style={{
                                    width: `${(value / baseTotal) * 100}%`,
                              }}
                        />
                  </div>

                  <span className="w-10 shrink-0 text-center">{min}</span>

                  <span className="w-10 shrink-0 text-center">{max}</span>
            </div>
      );
}
