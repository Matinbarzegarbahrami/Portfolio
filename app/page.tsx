"use client"
import { motion, } from "motion/react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home")
  return (
    <motion.div 
    initial={{y:-20, opacity:0}}
    animate={{y:0, opacity:1}}
    exit={{y:-20, opacity:0}}
    transition={{duration:0.6}}
    >
      <h1>{t("title")}</h1>
    </motion.div>
  );
}