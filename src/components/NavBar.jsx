import React from "react";
const NavBar = () => {
  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <a className="text-2xl md:text-4xl py-1 font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold">
            <li className="hover:text-blue-500">
              <a href="#">Products</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#">Features</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#">Testimonials</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-red-400 transition-all"></i>
            <button className="font-semibold cursor-pointer hover:text-green-500 transition-all">
              Login
            </button>
            <a className="btn rounded-full font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-linear-to-l hover:from-[#4F39F6] hover:to-[#9514FA] transition-all delay-1000 ease-in-out border-none">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
