"use client"

import Image from "next/image";
import { Experience } from "../../types/Experience";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function ExperienceWorking() {
  const t = useTranslations("WorkHistory")

  const experience = t.raw("list") as Experience[]


const locale = useLocale()
  return (
    <motion.div className="mt-14"
    initial={{y:-30,opacity:0}}
    viewport={{once:true}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1.2}}
    >

      <h3 className="text-center mb-8 bg-yellow-800/20 w-max mx-auto px-5 py-3 rounded-2xl">
        {t("experience")}
      </h3>


      <div className="space-y-6">
        {experience.map((item: Experience) => {
          return (
            <div
              key={item.id}
              className={`
        m-3 
        bg-zinc-600 
        p-5 
        rounded-2xl 
        flex 
        flex-col 
        md:flex-row
        items-center
        gap-6
       
      `}
            >

              <Image
                src={item.image}
                alt={item.alt}
                width={120}
                height={120}
                className="rounded-2xl"
              />


              <div
                className={`
          flex-1
          text-center
          
          ${locale == "en" ? "md:text-left " : "md:text-right"}
        `}
                dir={locale == "fa" ? "rtl" : "ltr"}
              >

                <h4 className="text-xl font-bold">
                  {item.name}
                </h4>

                <p className="text-yellow-400 mt-2">
                  {item.position}
                </p>

                <p className="text-zinc-400 text-sm mt-1">
                  {item.workingTime}
                </p>

                <p className="mt-4 whitespace-pre-line">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}
      </div>

    </motion.div>
  )
}