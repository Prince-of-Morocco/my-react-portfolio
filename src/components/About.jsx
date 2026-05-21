import React from 'react'

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">
          About
        </h1>

        <p className="text-justify leading-relaxed">
          I am an MCA graduate with a strong academic interest in Artificial
          Intelligence, Computer Vision, and intelligent systems. My work
          primarily focuses on developing real-time AI-based applications using
          machine learning and computer vision techniques. Through projects
          involving object detection, backend integration, and system deployment,
          I have gained practical experience in building scalable and efficient
          software solutions. I aim to pursue advanced studies and research in
          Artificial Intelligence and emerging intelligent technologies.

        </p>

        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>

        <span className="block text-justify leading-relaxed">
          <strong>Master of Computer Applications (MCA)</strong> — Anurag University (2023 – 2025)
          <br />

          <strong>B.Sc Computer Science & Cognitive Systems</strong> — Loyola
          Academy (2020 – 2023)
          <br />

        </span>

        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Technical Skills
        </h1>

        <span className="block text-justify leading-relaxed">
          <strong>Programming:</strong> Python, SQL
          <br />

          <strong>Frameworks & Libraries:</strong> Django, OpenCV,
          YOLOv8
          <br />

          <strong>Cloud & Tools:</strong> AWS EC2, Git, Linux
          <br />

          <strong>Domains:</strong> Artificial Intelligence, Computer Vision,
          Real-Time Detection Systems, Cybersecurity Fundamentals
        </span>

        <br />
        <br />

      
      </div>
    </div>
  )
}

export default About
