import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import EventCard from "./EventCard";

const ConnectAndThrive = () => {
  const events = [
    {
      title: "Start-Up Funding",
      date: "12th Dec 202X",
      price: "$50",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      title: "Women in Tech",
      date: "13th Dec 202X",
      price: "$60",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      title: "Healthcare Innovation Forum",
      date: "14th Dec 202X",
      price: "$40",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      title: "Mastering Public Speaking",
      date: "15th Dec 202X",
      price: "$100",
      imageUrl: "https://placehold.co/300x200",
    },
  ];

  return (
    <section className="bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex flex-col items-start">
          <h2 className="text-6xl text-primary font-bold text-start mb-4">
            <span className="block">Connect and Thrive:</span>
            <span className="block">Events That Matter</span>
          </h2>
          <p className="text-lg text-start text-gray-600 mb-6">
            <span className="block">
              Discover events that connect, inspire, and empower, from
            </span>
            <span className="block">
              intimate meetups to industry-changing conferences.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 bg-secondary p-4 rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <label className="text-gray-500 text-base mb-2">Date</label>
            <select className="p-3 rounded-md bg-secondaryLight text-primary text-semibold focus:outline-none w-auto min-w-[150px] max-w-[250px]">
              <option>12 - 15 Dec 202X</option>
              <option>16 - 18 Dec 202X</option>
              <option>19 - 22 Dec 202X</option>
              <option>23 - 25 Dec 202X</option>
              <option>01 - 05 Jan 202Y</option>
            </select>
          </div>

          <div className="flex flex-col justify-between">
            <label className="text-gray-500 text-base mb-2">Format</label>
            <select className="p-3 rounded-md bg-secondaryLight text-primary text-semibold focus:outline-none w-auto min-w-[150px] max-w-[250px]">
              <option>In-Person</option>
              <option>Virtual</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div className="flex flex-col justify-between">
            <label className="text-gray-500 text-base mb-2">Location</label>
            <select className="p-3 rounded-md bg-secondaryLight text-primary text-semibold focus:outline-none w-auto min-w-[150px] max-w-[250px]">
              <option>Nairobi, Kenya</option>
              <option>New York, USA</option>
              <option>London, UK</option>
              <option>Toronto, Canada</option>
              <option>Berlin, Germany</option>
            </select>
          </div>

          <div className="flex flex-col justify-between">
            <button className="bg-primary text-white p-3 flex items-center justify-center gap-3 text-base hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow">
              <FaSearch size={18} /> Search Event
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div className="h-[350px]">
              {" "}
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                price={event.price}
                imageUrl={event.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectAndThrive;
