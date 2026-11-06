import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const Headers = () => {
  // Hamburger Icon
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // Header Body Start
    <header className="height-30rem">
      {/* Header Container */}
      <section className="flex gap-2 md:gap-3.5 justify-between w-100rem py-7 m-auto bg-[#202020] px-10 md:px-40">
        {/* Logo */}
        <div>
          <NavLink
            to="/"
            className="font-semibold text-2xl hover:text-amber-500 font-serif"
          >
            WorldAtlas
          </NavLink>
        </div>
        {/* Laptop or Above */}
        <div className="hidden md:block">
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-blue-500"
                  : "hover:text-blue-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-blue-500"
                  : "hover:text-blue-400"
              }
            >
              About
            </NavLink>
            <NavLink
              to="country"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-blue-500"
                  : "hover:text-blue-400"
              }
            >
              Country
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive
                  ? "underline font-semibold text-blue-500"
                  : "hover:text-blue-400"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <IoMdClose size={26} /> : <RxHamburgerMenu size={26} />}
        </div>
      </section>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-2.5 bg-[#202020] text-white px-6 py-4 space-y-4">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block underline font-semibold text-blue-500"
                : "hover:text-blue-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block underline font-semibold text-blue-500"
                : "hover:text-blue-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="country"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block underline font-semibold text-blue-500"
                : "hover:text-blue-400"
            }
          >
            Country
          </NavLink>
          <NavLink
            to="contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block underline font-semibold text-blue-500"
                : "hover:text-blue-400"
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};
