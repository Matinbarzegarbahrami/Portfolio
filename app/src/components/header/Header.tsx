import Items from "./HeadresItem";

export default async function Header() {

  return (
    <header className="
      w-full
      px-8
      py-6
      flex
      items-center
      justify-between
      border-b
      border-white/10
      bg-black/20
      backdrop-blur-md
    ">
      <div>
        <h1
          className="
            text-4xl
            font-extrabold
            tracking-tight
            bg-linear-to-r
            from-gray-200
            to-yellow-600
            bg-clip-text
            text-transparent
          "
        >
          Header Name
        </h1>
      </div>

      <Items />
    </header>
  );
}