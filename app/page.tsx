"use client"
import { motion, } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Home")
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex min-h-[calc(100vh-0px)] justify-center items-center">
        <div className="w-[250px] h-[250px]">
          <Image src={'/images/home.jpg'} alt="home-pic" width={250} height={250} />
          </div>

        <div className="text-white w-80">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
          <p>{t("coffee")}</p>
        </div>
      </div>
    </motion.div>
  );
}