export default function Json() {
      return (
            <div className="max-w-sm w-full h-fit rounded-xl border border-[color:var(--border)] shadow-md  shadow-[color:var(--shadow)] bg-[color:var(--bg-2)]">
                  <header className="flex px-3 py-3 text-[10px] text-[color:var(--text-muted)] font-mono">
                        {" "}
                        ... <span className="ml-auto">about-me.json</span>
                  </header>
                  <div className="p-3  border-y border-[color:var(--border)] text-xs">
                        <p className="text-[color:var(--text-strong)]">
                              <span className="text-[color:var(--accent)]">"name "</span> : "Jerald Mark Llona",
                        </p>
                  </div>
                  <footer className="px-3 py-3 text-[10px] text-[color:var(--text-muted)] ">
                        <span className="ml-auto">UTF-8</span>
                  </footer>
            </div>
      );
}