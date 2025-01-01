"use client";

import Image from "next/image";
import { FaGoogle, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-[#023047] text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row  lg:items-start lg:px-0 px-2">
        {/* Left Side: Text and Buttons */}
        <div className="lg:w-1/2 space-y-5 text-left">
          <h1 className="text-4xl font-bold leading-tight">
            CONNECT, COLLABORATE, AND GROW AT YOUR OWN PACE.
          </h1>
          <p className="text-lg">
            Take the pressure off and focus on building meaningful connections.
          </p>
          <div className="space-y-6">
            <button
              className="flex items-center justify-center bg-[#8ECAE6] text-[#023047] text-lg px-8 py-4 rounded-full shadow-lg w-full hover:opacity-90 transition-all"
              style={{ maxWidth: "400px" }}
            >
              <FaGoogle className="mr-3" />
              Continue With Google
            </button>
            <button
              className="flex items-center justify-center bg-[#8ECAE6] text-[#023047] text-lg px-8 py-4 rounded-full shadow-lg w-full hover:opacity-90 transition-all"
              style={{ maxWidth: "400px" }}
            >
              <FaEnvelope className="mr-3" />
              Sign In with Email
            </button>
          </div>
          <p className="text-lg">
            By clicking Continue, you agree to Lattelink&apos;s{" "}
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
          {/* New to Lattelink Section */}
          <div className="flex items-center space-x-6 text-lg">
            <p>New to Lattelink?</p>
            <button className="bg-[#8ECAE6] text-[#023047] font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-lg">
              Create Account
            </button>
          </div>
        </div>

        {/* Right Side: Images and Dotted Lines */}
        <div className="lg:w-1/2 relative mt-12 lg:mt-0 h-[600px]">
          {/* Image Positions and Connections */}
          {[
            { src: "https://placehold.co/128x128", top: "5%", left: "60%" },
            { src: "https://placehold.co/128x128", top: "25%", left: "70%" },
            { src: "https://placehold.co/128x128", top: "45%", left: "55%" },
            { src: "https://placehold.co/128x128", top: "65%", left: "75%" },
            { src: "https://placehold.co/128x128", top: "80%", left: "60%" },
          ].map((img, index) => (
            <div
              key={index}
              className="absolute w-32 h-32 border-4 border-white rounded-full overflow-hidden shadow-lg"
              style={{ top: img.top, left: img.left }}
            >
              <Image
                src={img.src}
                alt={`Network ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}

          {/* Dotted Lines (SVG Paths) */}
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="60%"
              y1="5%"
              x2="70%"
              y2="25%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4"
            />
            <line
              x1="70%"
              y1="25%"
              x2="55%"
              y2="45%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4"
            />
            <line
              x1="55%"
              y1="45%"
              x2="75%"
              y2="65%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4"
            />
            <line
              x1="75%"
              y1="65%"
              x2="60%"
              y2="85%"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
