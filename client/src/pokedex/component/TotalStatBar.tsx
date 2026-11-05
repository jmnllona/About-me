
export default function TotalStatBar({ total , max }: { total: number ; max:number  }) {
      return (
            <div className="flex items-center gap-2">
                  <span className="w-14 shrink-0 text-stone-400">Total:</span>

                  <span className="w-10 shrink-0 text-center">{total}</span>

                  <div className="h-1.5 w-full bg-stone-700">
                        <div
                              className="h-full bg-purple-400"
                              style={{
                                    width: `${(total / max) * 100}%`,
                              }}
                        />
                  </div>

                  <span className="w-10 shrink-0 text-center text-stone-400">min</span>

                  <span className="w-10 shrink-0 text-center text-stone-400">max</span>
            </div>
      );
}