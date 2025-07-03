import Image from "next/image";
import Link from "next/link";
import slider from '../../public/slider.png'
import { Collaborative } from "@/components/Collaborative";
import { InfoSlider } from "@/components/Slider";
import PageJob from "@/components/jobs/page";

interface LinkButtonProps {
  href: string;
  text: string;
  className: string;
}

interface HomeSectionProps {
  title?: string;
  children: React.ReactNode;
  className: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, className }) => {
  return (
    <Link href={href}
      className={`${className} text-[#149ac5] font-medium text-[17px] border border-[#149ac5] px-10 py-3 rounded-[10px] hover:bg-[#edf7f6]`}>
      {text}
    </Link>
  )
}

const HomeSection: React.FC<HomeSectionProps> = ({ title, children, className }) => {
  return (
    <section className={className}>
      {title && <p className="font-semibold text-2xl mb-5">{title}</p>}
      {children}
    </section>
  )
}

const FeatureOnSection: React.FC = () => {
  return (
    <div className=" justify-items-center grid gap-y-1 relative font-accent">
      <h3 className="text-[1.8rem] font-bold pb-3">Feature On</h3>
    </div>
  )
}

export default function Home() {
  return (
    <main className="mt-[10rem] ">
      {/* <div className="bg-gradient-to-b w-full from-[#cde6ff] to-[#fff] h-[50rem] absolute top-0"></div> */}
      <div className="w-auto font-accent relative">
        <div className=" justify-items-center grid grid-cols-1 gap-y-1 md:grid-cols-1">
          <InfoSlider />
          <Collaborative />
          <div className="grid justify-items-center justify-center mt-2">
            <LinkButton href="/coverLetter" text="Create your Professional CV now!" className="" />
          </div>
        </div>

        <div className="mt-6 pb-5 border-2 shadow-[0px_0px_6px_#dedede] border-[#dedede] justify-items-center rounded-[9px] bg-[#fff]">
          <div className="w-[80rem] ml-9 py-4">
            <PageJob />
          </div>
        </div>
      </div>
    </main>
  );
}
