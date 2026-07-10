import type { StaticImageData } from "next/image";

export type Experience = {
  id: number;
  name: string;
  description: string;
  position: string;
  workingTime: string;
  image: string | StaticImageData;
  alt: string;
};