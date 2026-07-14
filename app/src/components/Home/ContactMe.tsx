"use client";

import { motion } from "motion/react";
import Link from "next/link";
import contacts from "../../messages/contact";
import { useTranslations } from "next-intl";

export default function ContactMe() {
  const t = useTranslations("Home")
  return (
    <section className="max-w-4xl mx-auto mt-8 rounded-4xl bg-zinc-800/40 p-6 text-white">

      <h2 className="mx-auto mb-8 w-max rounded-2xl bg-yellow-800/20 px-5 py-3 text-xl font-semibold">
        {t("contact")}
      </h2>

      <div
        className="grid grid-cols-2 gap-5 md:grid-cols-4"
        dir="ltr"
      >
        {contacts.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >
              <Link
                href={item.href}
                target="_blank"
                className="
                  group
                  flex
                  flex-col
                  items-center
                  gap-3
                  rounded-3xl
                  border
                  border-zinc-700
                  bg-zinc-900/50
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-500
                  hover:bg-zinc-800
                "
              >
                <Icon
                  size={34}
                  className="transition group-hover:text-yellow-400"
                />
                <span className="text-sm text-zinc-300 group-hover:text-white">
                  {item.name}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}