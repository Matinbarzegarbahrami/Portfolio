
import { useLocale } from "next-intl"

import ExperienceWorking from "./Experience"
import Skills from "./Skills"

export default function WorkHistory() {

  return (
    <section className="text-white max-w-4xl bg-zinc-800/40 m-auto p-6 rounded-4xl mt-8">
      <Skills />
      <ExperienceWorking/>

    </section>
  )
}