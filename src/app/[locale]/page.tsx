import Link from "next/link";
import { Collaborative } from "@/components/Collaborative";
import { InfoSlider } from "@/components/Slider";
import { QuickJob } from "@/components/QuickJob";
import SeekerVoice from "@/components/SeekerVoice";
import FindJob from "@/components/findJobs/page";
import { jobCategories, popularKeywords } from "@/data/types/category";
import { AchievementJob } from "@/components/AchivementJob";
import Media from "./media/page";
import JobCategory from "./jobCategory/page";

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

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, className }) => {
  return (
    <Link href={href}
      className={`${className} text-[#149ac5] font-medium text-[17px] border border-[#149ac5] px-10 py-[10px] rounded-[10px] hover:bg-[#edf7f6]`}>
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

const FeatureOnSection: React.FC<SectionHeaderProps> = ({ title, description, className = "" }) => (
  <div className={`justify-items-center grid gap-y-1 relative font-accent ${className}`}>
    <h3 className="text-[1.8rem] font-semibold pb-2">{title}</h3>
    <div className="h-0.5 w-20 bg-accent"></div>
    { description && <p className="pt-4">{description}</p>}
  </div>
)

export default function Home() {
  return (
    <main className="mt-[8rem]">
      {/* <div className="bg-gradient-to-b w-full from-[#cde6ff] to-[#fff] h-[50rem] absolute top-0"></div> */}
      <div className="w-auto font-accent relative">
        <div className=" justify-items-center grid grid-cols-1 gap-y-1 md:grid-cols-1">
          <InfoSlider />
          <div className="grid justify-items-center justify-center mt-2">
            <LinkButton href="/coverLetter" text="Create your Professional CV now!" className="" />
            {/* <CVButton /> */}
            {/* <CreateCVButton /> */}
          </div>
          <Collaborative />
        </div>

        <div className="justify-items-center rounded-[9px]"> {/* shadow-[0px_0px_6px_#dedede] border-2 border-[#dedede] */}
          <JobCategory />
        </div>

        <div className="bg-[#F0F4F8] h-auto mt-7">
          <QuickJob />
        </div>
        {/* <div className="container w-full mx-auto 2xl:px-[10.5rem] "> */}
        <div className="">
          <AchievementJob />
        </div>
        <div className="mt-8">
          <SeekerVoice />
        </div>


        <div className="">
          <Media />
        </div>

        <div className="container mx-auto px-[10.5rem] mt-6">
          <p className="text-[1.6rem] font-bold">Find a job</p>
          <FindJob
            jobCategories={jobCategories}
            popularKeyword={popularKeywords}
            title="Find Your Dream Job"
          />
        </div>

        <div className="mt-6 grid justify-items-center mb-6cd">
          <FeatureOnSection
            title="Feature On"
            description="Astro HR os delighted to be covered by various media. Our team adheres to six original core values."
          />
          <h4 className=" justify-items-center text-center my-2">
            ( Teamwork, High Ambition, Strong Confident, Be the only ONE, Working Hard, and PDCA Quality Cycle)
          </h4>
          <p className=" justify-items-center text-center">
            to ensure we deliver what we promise to ourselves and our customers.
          </p>
          <Collaborative />
        </div>
      </div>
    </main>
  );
}