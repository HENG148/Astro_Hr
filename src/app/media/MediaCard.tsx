import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

export interface MediaCardProps {
  id: number;
  title: string;
  date: string;
  image: StaticImageData | string;
  showDate: boolean;
  onClick?: (id: number) => void;
}

const MediaCard: React.FC<MediaCardProps> = ({
  id,
  title,
  image,
  date,
  showDate = true,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id)
    }
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Link href={`/media/${id}?title=${encodeURIComponent(title)}`}>
        <Image
          className="h-[178.75px] w-[300px] object-cover rounded-[20px]"
          src={image}
          alt={title}
        />
      </Link>
      {showDate && (
        <div className="mx-3 pb-4 font-accent h-[8rem]"> {/* remove height for if U want to use auto height */}
          <div className="flex items-center gap-2 mt-1">
            <FaRegCalendarAlt className="text-[#757575] text-[1.3rem]" />
            <p className="text-[0.95rem] text-[#212121] font-semibold pt-2">{date}</p>
          </div>
          <p className="mt-1 font-medium">{title}</p>
        </div>
      )}
    </div>
  )
}

export default MediaCard