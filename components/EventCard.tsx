import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

interface EventCardProps {
  title: string;
  date: string;
  price: string;
  imageUrl: string;
}

const EventCard = ({ title, date, price, imageUrl }: EventCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow h-full flex flex-col">
      <a href="#">
        <Image
          className="rounded-t-lg"
          src={imageUrl}
          alt={`${title} Placeholder`}
          width={300}
          height={200}
          layout="responsive"
          objectFit="cover"
        />
      </a>
      <div className="p-5 bg-primary text-white flex flex-col justify-between flex-grow">
        <a href="#">
          <h5 className="text-2xl font-bold tracking-tight">{title}</h5>
        </a>
        <p className="mb-3 flex items-center">
          <span className="font-bold">{price}</span> | {date}
          {/* Button with Plus Icon */}
          <button className="ml-auto bg-white text-primary rounded-full p-2 flex items-center justify-center">
            <AiOutlinePlus className="w-5 h-5" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default EventCard;
