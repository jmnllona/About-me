export default function Json() {
      return (
            <div className="max-w-sm w-full h-fit rounded-xl border border-stone-600 shadow-md  shadow-stone-700 bg-old-800">
                  <header className="flex px-3 py-3 text-[10px] text-stone-400 font-mono">
                        {" "}
                        ... <span className="ml-auto">about-me.json</span>
                  </header>
                  <div className="p-3  border-y border-stone-600 text-xs">
                        <p className="text-yellow-100">
                              <span className="text-cyan-300">"name "</span> : "Jerald Mark Llona",
                        </p>
                  </div>
                  <footer className="px-3 py-3 text-[10px] text-stone-400 ">
                        <span className="ml-auto">UTF-8</span>
                  </footer>
            </div>
      );
}
