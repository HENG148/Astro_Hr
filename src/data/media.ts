import { StaticImageData } from "next/image";

export type MediaItem = {
  id: number;
  title: string;
  date: string;
  image: StaticImageData | string;
  showDate: boolean;
}

export const defaultMediaData: MediaItem[] = [
  {
    id: 100,
    title: "Job Seeker Review on Jobify (Rong Sokheng)",
    date: "March 01, 2025",
    image: require('../../public/stats1.jpg'),
    showDate: true
  },
  {
    id: 101,
    title: "Startup Resilience: Accelerating Startup Success through Business..",
    date: "March 01, 2025",
    image: require('../../public/stats1.jpg'),
    showDate: true
  },
  {
    id: 102,
    title: "Job Seeker Review on Jobify (Khem Sovatchhay)",
    date: "March 01, 2025",
    image: require('../../public/stats1.jpg'),
    showDate: true
  },
  {
    id: 103,
    title: "Plug and Play - Silicon Valley Summit 2025",
    date: "March 01, 2025",
    image: require('../../public/stats1.jpg'),
    showDate: true
  },
  {
    id: 104,
    title: "How to handle call center stress",
    date: "March 01, 2025",
    image: require('../../public/stats1.jpg'),
    showDate: true
  },
  {
    id: 105,
    title: "Technical Acronyms, shortcuts and full names",
    date: "March 01, 2025",
    image: require('../../public/stats1.jpg'),
    showDate: true
  },
  {
    id: 106,
    title: "Type of Logs",
    date: "March 01, 2025",
    image: require('../../public/stats1.jpg'),
    showDate: true
  },
]