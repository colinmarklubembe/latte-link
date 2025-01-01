import Image from "next/image";

const WhatsNew = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">What’s New?</h2>
        <p className="text-center text-gray-600 mb-8">Your pace, your terms</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <div className="relative w-full h-64">
              <Image
                src="/networking.jpg"
                alt="Networking"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold mt-4">
              Build a rich & authentic network
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Both personal and professional.
            </p>
            <div className="flex flex-wrap justify-center mt-4 space-x-2">
              <span className="bg-gray-200 px-4 py-2 rounded-full text-sm">
                Mentorship
              </span>
              <span className="bg-gray-200 px-4 py-2 rounded-full text-sm">
                Opportunities
              </span>
              <span className="bg-gray-200 px-4 py-2 rounded-full text-sm">
                Discovery
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Read About It</h3>
            <p className="text-gray-600 mb-4">
              Discover insights tailored to your industry, with articles from
              experts and curated knowledge powered by AI.
            </p>
            <div className="flex flex-wrap space-x-2">
              <span className="bg-gray-200 px-4 py-2 rounded-full text-sm">
                Technology
              </span>
              <span className="bg-gray-200 px-4 py-2 rounded-full text-sm">
                Finance
              </span>
              <span className="bg-gray-200 px-4 py-2 rounded-full text-sm">
                Education
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
