import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLangStore = create()(
  persist(
    (set) => ({
      language : "en",
      setLanguage: (lang:string)=>{
        language:set(lang)
      }
    })
    ,
    { name: "lang" }
  )
)

export default useLangStore