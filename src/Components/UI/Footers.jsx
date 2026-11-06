import { MdLocationPin } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { LuMailPlus } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export const Footers = () => {
  return (
    <section>
      {/* Footer Section Starts */}
      <footer className="flex flex-col gap-10 items-start lg:flex-row lg:justify-between px-10 md:px-40 py-3.5 bg-[#151414]">
        {/*div card  */}
        <div className="flex gap-3.5 justify-center items-center">
          {/* for icon */}
          <div className="text-blue-500 text-4xl">
            <MdLocationPin />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="font-semibold">Find Us</h2>
            <p className="font-light">City Thana Jhelum</p>
          </div>
        </div>

        <div className="flex gap-3.5 justify-center items-center">
          <div className="text-blue-500 text-4xl">
            <MdCall />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="font-semibold">Call Us</h2>
            <p className="font-light">090078601</p>
          </div>
        </div>

        <div className="flex gap-3.5 justify-center items-center">
          <div className="text-blue-500 text-4xl">
            <LuMailPlus />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="font-semibold">Email Us</h2>
            <p className="font-light">Project@test.com</p>
          </div>
        </div>
      </footer>
      {/* CopyRight Section Start */}
      <div className="flex flex-col lg:flex-row gap-2 lg:justify-between items-center px-10 md:px-40 py-5 border-y bg-[#202020]">
        <div>
          <p className="text-sm font-light text-[#878787]">
            © 2026 All Rights Reserved
          </p>
        </div>
        <div>
          <ul className="flex gap-6 text-sm font-light">
            <li className="hover:text-blue-500">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-blue-500">
              <NavLink to="about">About</NavLink>
            </li>
            <li className="hover:text-blue-500">
              <NavLink to="country">Country</NavLink>
            </li>
            <li className="hover:text-blue-500">
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
