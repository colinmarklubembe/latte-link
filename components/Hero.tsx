import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-blue-900 text-white p-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Connect, Collaborate, and Grow at Your Own Pace
        </h1>
        <p className="text-lg mb-6">
          Take the pressure off and focus on building meaningful connections.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
            Continue With Google
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-lg">
            Sign In with Email
          </button>
        </div>
        <p className="text-sm">
          By clicking Continue, you agree to Lattelink's{" "}
          <a href="#" className="underline">
            User Agreement
          </a>
          ,{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          , and{" "}
          <a href="#" className="underline">
            Cookie Policy
          </a>
          .
        </p>
        <div className="relative mt-8 w-full h-72">
          <Image
            src="/hero-network.png"
            alt="Hero Section Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
