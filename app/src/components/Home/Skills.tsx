"use client"
import { useTranslations } from "next-intl"
import skills from "../../messages/skills"
import { motion } from "motion/react"
export default function Skills(){
  const t = useTranslations("Skills")
  return(
    <motion.div
    initial={{y:-30,opacity:0}}
    whileInView={{y:0,opacity:1}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
        <h2 className="text-center mb-6 bg-yellow-800/20 w-max mx-auto px-5 py-3 rounded-2xl">
          {t("title")}
        </h2>

        <div
          className="flex gap-8 flex-wrap items-center justify-center"
          dir="ltr"
        >
          {skills.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 hover:scale-110 transition"
              >
                <Icon color={item.color} size={34} />
                <span className="text-sm text-zinc-300">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </motion.div>
  )
}