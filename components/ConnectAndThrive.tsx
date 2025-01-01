import Image from "next/image";

const ConnectAndThrive = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Connect and Thrive: Events That Matter
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Discover events that connect, inspire, and empower, from intimate
          meetups to industry-changing conferences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <select className="p-2 rounded-md bg-blue-100 border border-blue-200">
            <option>Date: 12 - 15 Dec 202X</option>
          </select>
          <select className="p-2 rounded-md bg-blue-100 border border-blue-200">
            <option>Format: In-Person</option>
          </select>
          <select className="p-2 rounded-md bg-blue-100 border border-blue-200">
            <option>Location: Nairobi, Kenya</option>
          </select>
          <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            Search Event
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Event 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/funding.jpg"
              alt="Start-Up Funding"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4">Start-Up Funding</h3>
            <p className="text-gray-600">$50 | 12th Dec 202X</p>
          </div>
          {/* Event 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/women-in-tech.jpg"
              alt="Women in Tech"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4">Women in Tech</h3>
            <p className="text-gray-600">$60 | 13th Dec 202X</p>
          </div>
          {/* Event 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/healthcare.jpg"
              alt="Healthcare Innovation Forum"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4">
              Healthcare Innovation Forum
            </h3>
            <p className="text-gray-600">$40 | 14th Dec 202X</p>
          </div>
          {/* Event 4 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/public-speaking.jpg"
              alt="Mastering Public Speaking"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4">
              Mastering Public Speaking
            </h3>
            <p className="text-gray-600">$100 | 15th Dec 202X</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectAndThrive;
