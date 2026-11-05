export default function SectionTitle({ children }: { children: React.ReactNode }) {
      return (  <header className=" flex items-center relative
      "><h2 className=" text-lg font-semibold ml-4 px-2 bg-stone-800 absolute">{children}</h2>
      <span className=" border-b border-stone-700 flex-1"></span></header>

    );
}
