import Items from "./HeadresItem";

export default async function Header() {

  return (
    <header 
    dir="ltr"
    className="
      w-full
      px-8
      py-6
      flex
      items-center
      justify-between
      border-b
      border-white/10
      bg-black/20
      backdrop-blur-sm
      sticky
      top-0
      z-50
    ">
      <div>
        <h1
          className="
            lg:text-4xl
            md:text-2xl
            font-extrabold
            tracking-tight
            bg-linear-to-r
            from-gray-200
            to-yellow-600
            bg-clip-text
            text-transparent
            text-lg

          "
        >
          MATIN BARZEGAR
        </h1>
      </div>

      <Items />
    </header>
  );
}