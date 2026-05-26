import React from "react";
import thumb from "../../public/thumb.png";

function Portfolio() {
  const projects = [
    {
      id: 1,
      image: thumb,

      title: "AI Driven Smart Surveillance for Weapon Detection Using YOLOv8",

      description:
        "A real-time AI-based surveillance and weapon detection system developed using YOLOv8, OpenCV, and Django. The system performs live monitoring, detects weapons in video streams, and sends automated alerts through integrated notification services.",

      technologies:
        "Python • YOLOv8 • OpenCV • Django",

      github:
        "https://github.com/bharathraj1024/AI-Driven-Smart-Surveillance-for-Weapon-Detection-Using-YOLOv8",

      demo:
        "https://youtu.be/vkhxaQHgLU0",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      {/* Heading Section */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Research & Projects
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Selected academic and technical projects focused on Artificial
          Intelligence, Computer Vision, and intelligent systems.
        </p>
      </div>

      {/* Projects Section */}
      <div className="flex justify-center flex-wrap gap-10">
        {projects.map(
          ({
            id,
            image,
            title,
            description,
            technologies,
            github,
            demo,
          }) => (
            <div
              key={id}
              className="max-w-[420px] bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="bg-gray-100 p-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full max-h-[280px] object-contain rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold leading-snug mb-4">
                  {title}
                </h2>

                <p className="text-gray-600 text-justify leading-relaxed mb-5">
                  {description}
                </p>

                <p className="text-sm font-semibold text-green-700 mb-6">
                  {technologies}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition duration-300">
                      Source Code
                    </button>
                  </a>

                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border border-green-600 text-green-700 hover:bg-green-50 px-5 py-2 rounded-lg font-semibold transition duration-300">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Portfolio;
