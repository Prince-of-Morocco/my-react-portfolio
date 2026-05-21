import React, { useState } from "react";
import dev from "../../public/dev.png?url";

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from "react-scroll";

function Navbar() {

  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
      target: "Home",
    },

    {
      id: 2,
      text: "About",
      target: "About",
    },

    {
      id: 3,
      text: "Projects",
      target: "Portfolio",
    },

    {
      id: 4,
      text: "Skills",
      target: "Skills",
    },

    {
      id: 5,
      text: "Contact",
      target: "Contact",
    },
  ];

  return (
    <>

      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">

        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20">

          <div className="flex justify-between items-center h-full">

            {/* Logo + Branding */}
            <div className="flex items-center space-x-3">

              <img
                src={dev}
                className="h-14 w-14 rounded-full object-cover"
                alt="Logo"
              />

              <div>

                {/* Name */}
                <h1 className="font-bold text-3xl leading-tight cursor-pointer">

                  Bharat
                  <span className="text-green-500">
                    h
                  </span>

                </h1>

                {/* Academic Tagline */}
                <p className="text-sm text-gray-600 font-medium">

                  AI • Computer Vision • Intelligent Systems

                </p>

              </div>

            </div>

            {/* Desktop Navbar */}
            <div>

              <ul className="hidden md:flex items-center space-x-8">

                {navItems.map(({ id, text, target }) => (

                  <li
                    key={id}
                    className="font-semibold cursor-pointer hover:text-green-600 hover:scale-105 duration-200"
                  >

                    <Link
                      to={target}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      spy={true}
                    >
                      {text}
                    </Link>

                  </li>

                ))}

              </ul>

              {/* Mobile Menu Icon */}
              <div
                className="md:hidden cursor-pointer"
                onClick={() => setMenu(!menu)}
              >

                {menu ? (
                  <IoCloseSharp size={26} />
                ) : (
                  <AiOutlineMenu size={26} />
                )}

              </div>

            </div>

          </div>

        </div>

        {/* Mobile Navbar */}
        {menu && (

          <div className="md:hidden bg-white shadow-lg">

            <ul className="flex flex-col items-center justify-center py-10 space-y-6 text-lg font-semibold">

              {navItems.map(({ id, text, target }) => (

                <li
                  key={id}
                  className="cursor-pointer hover:text-green-600 duration-200"
                >

                  <Link
                    to={target}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    onClick={() => setMenu(false)}
                  >
                    {text}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        )}

      </div>

    </>
  );
}

export default Navbar;
