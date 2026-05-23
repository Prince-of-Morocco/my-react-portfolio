import React from "react";
import django from "../../public/django.jpg";
import demo from "../../public/demo.png";

function Portfolio() {

  const projects = [
    {
      id: 1,
      image: demo,
      title: "AI - Driven Smart Surveillance for Weapon Detection Using YOLOv8",

      description:
        "A real-time AI-based surveillance and weapon detection system developed using YOLOv8, OpenCV and Django. The system performs live monitoring, detects weapons in video streams, and sends automated alerts through integrated notification services.",

      technologies:
        "Python • YOLOv8 • OpenCV • Django",

      github:
        "https://github.com/Prince-of-Morocco/AI-Driven-Smart-Surveillance-for-Weapon-Detection-Using-YOLOv8",

      demo:
        "https://youtu.be/VJB6Uxs6crg",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Research & Projects
        </h1>

        <p className="text-gray-600">
          Selected academic and technical projects focused on Artificial
          Intelligence, Computer Vision, and intelligent systems.
        </p>
      </div>

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
              className="max-w-[420px] border rounded-xl shadow-md p-5 hover:shadow-xl duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-[220px] object-cover rounded-lg mb-5"
              />

              <h2 className="text-2xl font-bold mb-3">
                {title}
              </h2>

              <p className="text-gray-700 text-justify mb-4 leading-relaxed">
                {description}
              </p>

              <p className="text-sm text-green-700 font-semibold mb-5">
                {technologies}
              </p>

              <div className="flex gap-4">

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold">
                    Source Code
                  </button>
                </a>

                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-green-600 text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg font-semibold">
                    Live Demo
                  </button>
                </a>

              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Portfolio;
