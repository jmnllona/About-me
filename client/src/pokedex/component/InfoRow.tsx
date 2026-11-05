export default function InfoRow({ label, children }: { label: string; children: React.ReactNode; width?: string }) {
      return (
            <div className={`grid grid-cols-[minmax(110px,130px)_1fr] `}>
                  <span className="text-stone-400">{label}</span>
                  <span>{children}</span>
            </div>
      );
}
