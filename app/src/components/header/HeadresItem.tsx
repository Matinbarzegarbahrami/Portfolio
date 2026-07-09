import { useTranslations } from "next-intl";
import LayoutAnimation from "./ChangeLayout";
import Link from "next/link";

export default function Items() {
  const t = useTranslations("Header")
  return (
    <nav className="
        flex
        gap-6
        text-gray-300
      ">
      <LayoutAnimation />
      <Link href={"/"} className="hover:text-yellow-400 transition">
        {t('Home')}
      </Link>

      <Link href={"/projects"} className="hover:text-yellow-400 transition">
        {t("Projects")}
      </Link>

      <Link href={"/about"} className="hover:text-yellow-400 transition">
        {t("About")}
      </Link>
    </nav>
  )
}