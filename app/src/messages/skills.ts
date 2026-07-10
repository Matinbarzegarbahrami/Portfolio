import { IconType } from "react-icons";
import ZustandSVG from "@/public/images/zustand-original.svg"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSass,
  SiRedux,
  SiPrisma,
  SiGit,
  SiGithub,
  SiOpenapiinitiative,
  SiFigma,
  SiPython,
  SiDjango,
} from "react-icons/si";

export interface Skill {
  id: number;
  name: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    id: 2,
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    id: 5,
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    id: 6,
    name: "CSS3",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    id: 8,
    name: "Sass",
    icon: SiSass,
    color: "#CC6699",
  },
  {
    id: 9,
    name: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
  },
  {
    id: 10,
    name: "Prisma",
    icon: SiPrisma,
    color: "#2D3748",
  },
  {
    id: 11,
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    id: 12,
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
  },
  {
    id: 13,
    name: "REST API",
    icon: SiOpenapiinitiative,
    color: "#6BA539",
  },
  {
    id: 14,
    name: "React Native",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    id: 15,
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    id: 16,
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    id: 17,
    name: "Django",
    icon: SiDjango,
    color: "#092E20",
  },
];

export default skills;