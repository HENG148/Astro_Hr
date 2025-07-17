import { ReactElement } from "react";
import { IoBagOutline } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { IconType } from "react-icons";

export interface StatItem {
  num: number;
  text: string; 
  icon: IconType;
}

export const defaultState: StatItem[] = [
  {
    num: 850,
    text: "Job Titles",
    icon: IoBagOutline,
  },
  {
    num: 850,
    text: "Job Titles",
    icon: BsFillPeopleFill,
  },
  {
    num: 850,
    text: "Job Titles",
    icon: FaRegBuilding,
  },
]