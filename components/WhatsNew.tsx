"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const WhatsNew = () => {
  const [showMoreBuild, setShowMoreBuild] = useState(false);
  const [showMoreRead, setShowMoreRead] = useState(false);

  const buildItems = [
    "Mentorship",
    "Opportunities",
    "Discovery",
    "Networking",
    "Growth",
    "Innovation",
    "Collaboration",
    "Leadership",
    "Support",
  ];

  const readItems = [
    "Technology",
    "Finance",
    "Education",
    "Healthcare",
    "Marketing",
    "Science",
    "Politics",
    "Lifestyle",
    "Art",
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start mb-12 lg:mb-0 pr-6">
            <h2 className="text-6xl font-bold text-primary text-center lg:text-left mb-8 uppercase">
              What’s New?
            </h2>
            <p className="text-3xl text-center text-primary mb-8 lg:text-left uppercase">
              Your pace, your terms
            </p>
            <div className="relative w-full h-[400px] mb-10">
              <Image
                src="https://placehold.co/600x600"
                alt="Placeholder for Networking"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Vertical Line Between Sections */}
          <div className="hidden lg:block w-px bg-primary mx-6"></div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <div className="flex flex-col gap-12">
              {/* Build a rich & authentic network */}
              <div className="flex flex-col items-start">
                <h3 className="text-3xl font-bold text-primary mt-6">
                  Build a rich & authentic network, Both personal and
                  professional.
                </h3>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {buildItems.slice(0, 3).map((item, index) => (
                    <span
                      key={index}
                      className="bg-white border border-primary px-6 py-3 rounded-full text-lg text-center"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {showMoreBuild && (
                  <div className="grid grid-cols-3 gap-4 mt-4 transition-all">
                    {buildItems.slice(3).map((item, index) => (
                      <span
                        key={index + 3}
                        className="bg-white border border-primary px-6 py-3 rounded-full text-lg text-center"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-3 mt-4">
                  <div className="col-span-3 flex justify-center">
                    <button
                      className="text-primary font-semibold flex items-center gap-2"
                      onClick={() => setShowMoreBuild(!showMoreBuild)}
                    >
                      {showMoreBuild ? (
                        <>
                          Show Less <FaChevronUp />
                        </>
                      ) : (
                        <>
                          Show More <FaChevronDown />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Read About It */}
              <div className="flex flex-col items-start">
                <h3 className="text-3xl text-primary font-bold mb-6">
                  Read About It
                </h3>
                <p className="text-xl text-primary text-left mb-6">
                  Discover insights tailored to your industry, with articles
                  from experts and curated knowledge powered by AI.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {readItems.slice(0, 3).map((item, index) => (
                    <span
                      key={index}
                      className="bg-white border border-primary px-6 py-3 rounded-full text-lg text-center"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {showMoreRead && (
                  <div className="grid grid-cols-3 gap-4 mt-4 transition-all">
                    {readItems.slice(3).map((item, index) => (
                      <span
                        key={index + 3}
                        className="bg-white border border-primary px-6 py-3 rounded-full text-lg text-center"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-3 mt-4">
                  <div className="col-span-3 flex justify-center">
                    <button
                      className="text-primary font-semibold flex items-center gap-2"
                      onClick={() => setShowMoreRead(!showMoreRead)}
                    >
                      {showMoreRead ? (
                        <>
                          Show Less <FaChevronUp />
                        </>
                      ) : (
                        <>
                          Show More <FaChevronDown />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
