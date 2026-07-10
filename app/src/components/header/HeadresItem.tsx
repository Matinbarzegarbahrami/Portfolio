"use client";

import { useTranslations } from "next-intl";
import LayoutAnimation from "./ChangeLayout";
import Link from "next/link";
import { useState } from "react";

export default function Items() {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex flex-row-reverse items-center gap-3 md:gap-6 text-gray-300 text-sm md:text-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-1 focus:outline-none"
        aria-label="منو"
      >
        <span className="block w-6 h-0.5 bg-gray-300 transition-all"></span>
        <span className="block w-6 h-0.5 bg-gray-300 transition-all"></span>
        <span className="block w-6 h-0.5 bg-gray-300 transition-all"></span>
      </button>

      <div className="hidden md:flex items-center gap-3 md:gap-6">
        <LayoutAnimation />
        <Link href="/" className="hover:text-yellow-400 transition">
          {t("Home")}
        </Link>
        <Link href="/projects" className="hover:text-yellow-400 transition">
          {t("Projects")}
        </Link>
        <Link href="/about" className="hover:text-yellow-400 transition">
          {t("About")}
        </Link>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-3 md:hidden z-50">
          <Link
            href="/"
            className="hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            {t("Home")}
          </Link>
          <Link
            href="/projects"
            className="hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            {t("Projects")}
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            {t("About")}
          </Link>
        </div>
      )}

      <div className="md:hidden ml-auto">
        <LayoutAnimation />
      </div>
    </nav>
  );
}