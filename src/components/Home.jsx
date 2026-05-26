import React from "react";
import dev from "../../public/dev.png?url";

import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-28 pb-16"
      >

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Section */}
          <div className="md:w-1/2 space-y-6 order-2 md:order-1">

            {/* Academic Identity */}
            <span className="text-lg text-gray-600 font-medium">
              MCA Graduate specializing in
            </span>

            {/* Typing Animation */}
            <div className="text-4xl md:text-5xl font-bold leading-tight">

              <ReactTyped
                className="text-blue-700"
                strings={[
                  "Artificial Intelligence",
                  "Computer Vision",
                  "Machine Learning",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop={true}
              />

            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-justify leading-relaxed text-gray-700 max-w-2xl">

              I’m Bharath Raj, an MCA graduate with strong interest in
              Artificial Intelligence, Computer Vision, and intelligent software
              systems. My academic work focuses on developing real-time
              AI-based applications using machine learning and computer vision
              techniques. Through projects involving object detection, backend
              integration, and deployment, I have gained practical experience in
              building scalable and efficient intelligent systems.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">

              <a
                href="https://github.com/bharathraj1024"
                target="_blank"
                rel="noreferrer"
              >

                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold duration-300 flex items-center gap-2 shadow-md">

                  <FaGithub />

                  GitHub

                </button>

              </a>

              {/* Resume Button */}
              {/*
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >

                <button className="border border-gray-700 text-gray-700 hover:bg-gray-100 px-6 py-2.5 rounded-lg font-semibold duration-300 shadow-sm">
                  Resume
                </button>

              </a>
              */}

            </div>

            {/* Research Interests */}
            <div className="pt-4">

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
          <div className="md:w-1/2 flex justify-center md:justify-end order-1">

            <img
              src={dev}
              className="rounded-full w-[300px] h-[300px] md:w-[420px] md:h-[420px] object-cover shadow-xl"
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
