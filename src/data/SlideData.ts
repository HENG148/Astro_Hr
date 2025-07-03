import { StaticImageData } from "next/image"

export type InfoCategory = {
  image: string,
  href: string,
  alt: string
}

export interface CollaborativeImage {
  img: string,
  alt: string,
  className?: string;
}

export const InfoSlide: InfoCategory[] = [
  {
    image: "/slider.png", href: "/#", alt: "image1"
  },
  {
    image: "/slider.png", href: "/#", alt: "image1"
  },
  {
    image: "/slider.png", href: "/#", alt: "image1"
  },
  {
    image: "/slider.png", href: "/#", alt: "image1"
  },
]

export const CollaborativeData: CollaborativeImage[] = [
  { img: "/nike.png", alt: "Nike" },
  { img: "/wingbank.png", alt: "Nike" },
  { img: "/nike.png", alt: "Nike" },
  { img: "/nike.png", alt: "Nike" },
  { img: "/nike.png", alt: "Nike" },
  { img: "/nike.png", alt: "Nike" },
  { img: "/nike.png", alt: "Nike" },
  { img: "/nike.png", alt: "Nike"},
]