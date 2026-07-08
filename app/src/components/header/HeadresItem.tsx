import LayoutAnimation from "./ChangeLayout";

export default function Items() {
  
  return (
    <nav className="
        flex
        gap-6
        text-gray-300
      ">
      <LayoutAnimation />
      <a className="hover:text-yellow-400 transition">
        Home
      </a>

      <a className="hover:text-yellow-400 transition">
        Projects
      </a>

      <a className="hover:text-yellow-400 transition">
        Contact
      </a>
    </nav>
  )
}