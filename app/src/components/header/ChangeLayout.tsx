"use client"

import { motion } from "motion/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function LayoutAnimation() {
  const [lang, setLang] = useState("en")
  const router = useRouter()

  const isEn = lang === "en"

  useEffect(() => {
    const fetchLang = async () => {
      try {
        const res = await fetch("/api/locale")

        if (!res.ok) {
          router.refresh()
          return
        }

        const data = await res.json()
        setLang(data.lang)

      } catch (err) {
        console.error(err)
      }
    }

    fetchLang()
  }, [router])


  const toggleSwitch = async () => {
    try {
      const res = await fetch("/api/locale", {
        method: "POST",
      })

      if (!res.ok) return

      const data = await res.json()

      setLang(data.lang)

      router.refresh()

    } catch (err) {
      console.error(err)
    }
  }


  return (
    <button
      onClick={toggleSwitch}
      className={`
        w-[50px] 
        h-[30px] 
        bg-yellow-600 
        relative 
        rounded-full 
        cursor-pointer 
        flex 
        items-center
        p-2
        ${isEn ? "justify-end" : "justify-start"}
      `}
    >

      <motion.div
        className="
          w-[14px]
          h-[14px]
          bg-yellow-900
          rounded-full
        "
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />

      <motion.p
        className={`
          absolute 
          top-[5px]
          text-xs
          ${isEn ? "left-1.5" : "right-1.5"}
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {lang}
      </motion.p>

    </button>
  )
}