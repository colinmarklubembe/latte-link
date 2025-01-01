import Carousel from "./Carousel";

const WhoIsLattelinkFor = () => {
  const carouselItems = [
    {
      title: "Let People Know What You Are Up To",
      description:
        "With the LiveLinks feature, you can let people know what you have in mind and connect with like-minded people or join exciting activities happening near you. Whether it’s networking, learning, or just having fun, LiveLinks helps you build authentic relationships.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      title: "Join Exciting Events",
      description:
        "Connect with industry professionals, attend events and workshops, and find endless opportunities to expand your knowledge and network.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      title: "Collaborate with Peers",
      description:
        "Lattelink allows you to collaborate with peers in your field. Work on projects, share ideas, and achieve great things together.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      title: "Find Mentorship Opportunities",
      description:
        "Looking for guidance? Find mentors who can help you grow both personally and professionally through the Lattelink platform.",
      imageUrl: "https://placehold.co/600x400",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl text-primary font-bold text-left mb-6">
          Who is Lattelink For?
        </h2>
        <div className="flex flex-wrap justify-start gap-4 mb-8">
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
          ].map((tag, index) => (
            <span
              key={tag}
              className={`px-4 py-2 text-sm ${
                index === 0
                  ? "bg-primary text-white"
                  : "bg-white border-2 border-primary text-primary hover:bg-gray-100"
              } rounded-full font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-center mb-8 flex items-center justify-center gap-4">
          <p className="text-2xl font-bold text-primary">
            Join your colleagues, classmates, and friends on Lattelink.
          </p>
          <button className="px-8 py-3 bg-primary text-white text-xl rounded-full hover:bg-primaryLight">
            Get Started
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <Carousel items={carouselItems} />
        </div>
      </div>
    </section>
  );
};

export default WhoIsLattelinkFor;
