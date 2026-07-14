"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Profile(){
    const t = useTranslations("Home");

  return(
    <>
    <motion.div
    initial={{y:-30, opacity:0}}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{once:true}}
    transition={{duration:0.8}}
        dir="ltr"
        className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 bg-zinc-900/70 w-full max-w-5xl mx-auto p-6 sm:p-10 mt-8 rounded-4xl backdrop-blur-xl"
      >
        <div className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] rounded-3xl flex-shrink-0">
          <Image
            src={"/images/HomeProfile.jpg"}
            alt="home-pic"
            width={350}
            height={350}
            className="rounded-3xl border-2 border-amber-300 w-full h-full object-cover"
          />
        </div>

        <div
          className="text-white w-full max-w-md lg:max-w-sm"
          dir="auto"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            {t("description")}
          </p>
          <p className="text-sm sm:text-base lg:text-lg mt-2">
            {t("coffee")}
          </p>
        </div>
      </motion.div>
    </>
  )
}