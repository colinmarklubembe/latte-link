import Image from "next/image";

const WhoIsLattelinkFor = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Who is Lattelink For?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            "All Professionals",
            "Find a Coworker",
            "Classmates",
            "Find Mentorship",
            "Build a Community",
            "Grow",
            "Opportunities",
            "Find a Friend",
            "Events",
            "Industry Insights",
            "Collaborate",
            "Impact",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-center mb-6">
          <p>Join your colleagues, classmates, and friends on Lattelink.</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-2/3">
            <h3 className="text-lg font-bold">
              Let People Know What You Are Up To
            </h3>
            <p className="text-gray-600 mt-2">
              With the LiveLinks feature, you can let people know what you have
              in mind and connect with like-minded people or join exciting
              activities happening near you. Whether it’s networking, learning,
              or just having fun, LiveLinks helps you build authentic
              relationships.
            </p>
          </div>
          <div className="relative w-64 h-64">
            <Image
              src="/live-links.jpg"
              alt="LiveLinks"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsLattelinkFor;

// https://placehold.co/600x400
