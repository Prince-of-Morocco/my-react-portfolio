import React from "react";
import dev from "../../public/dev.png?url";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-24 pb-16"
      >
        <div className="flex flex-col md:flex-row items-center">

          {/* Left Section */}
          <div className="md:w-1/2 space-y-5 order-2 md:order-1">

            <span className="text-lg text-gray-600 font-medium">
              MCA Graduate
            </span>

            {/* Heading */}
            <div className="flex flex-wrap items-center gap-2 text-2xl md:text-4xl font-bold">
              <h1>Hello, I'm</h1>

              <span className="text-green-600">
                Bharath Raj
              </span>
            </div>

            {/* Typing Animation */}
            <div className="text-2xl md:text-3xl font-semibold">

              <ReactTyped
                className="text-blue-700"
                strings={[
                  "AI Research Enthusiast",
                  "Computer Vision Aspirant",
                  "Intelligent Software Systems",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop={true}
              />

            </div>

            {/* Description */}
            <p className="text-sm md:text-md text-justify leading-relaxed text-gray-700">

              I’m an MCA graduate with strong interest in Artificial
              Intelligence, Computer Vision, and intelligent software systems.
              My academic work focuses on developing real-time AI-based
              applications using machine learning and computer vision techniques.
              Through projects involving object detection, backend integration,
              and deployment, I have gained practical experience in building
              scalable and efficient intelligent systems.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">

              <a
                href="https://github.com/Prince-of-Morocco"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold duration-300">
                  GitHub
                </button>
              </a>

              {/* Add Resume Link Here */}
              {/*
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <button className="border border-gray-700 text-gray-700 hover:bg-gray-100 px-5 py-2 rounded-lg font-semibold duration-300">
                  Resume
                </button>
              </a>
              */}

            </div>

            {/* Research Interests */}
            <div className="pt-6">

              <h1 className="font-semibold text-lg mb-3">
                Research Interests
              </h1>

              <div className="flex flex-wrap gap-3">

                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:scale-105 duration-200">
                  Artificial Intelligence
                </span>

                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:scale-105 duration-200">
                  Computer Vision
                </span>

                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:scale-105 duration-200">
                  Machine Learning
                </span>

                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:scale-105 duration-200">
                  Intelligent Systems
                </span>

              </div>

            </div>

          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0 order-1">

            <img
              src={dev}
              className="rounded-full w-[300px] h-[300px] md:w-[420px] md:h-[420px] object-cover shadow-lg"
              alt="Bharath Raj"
            />

          </div>

        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
