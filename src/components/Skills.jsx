import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import linux from "../../public/linux.png?url";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import sql from "../../public/sql.png?url";
import s3 from "../../public/s3.png?url";
import ec from "../../public/ec.png?url";

function Skills() {
 const cardItem = [
    {
      id: 1,
      logo: linux,
      name: "Linux",
    },
    {
      id: 2,
      logo: py,
      name: "Python",
    },
    {
      id: 3,
      logo: git,
      name: "Git",
    },

  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl text-center font-bold mb-5">Skills</h1>

        {/* ✅ Fixed Grid Layout - Centers all 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-3 justify-items-center">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-4 cursor-pointer hover:scale-110 duration-300"
            >
              <img src={logo} className="w-[120px] h-[120px] rounded-full object-contain" alt={name} />
              <div className="mt-3 text-center font-medium">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
