import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, matchPath, Outlet } from "react-router-dom";
import logo from "../Images/favicon.ico";

  /* <script src="//unpkg.com/alpinejs" defer></script> */

export function Navbar() {
  const match = matchPath({ path: "/users/:id" }, "/users/123");

  const [isactive, setActive] = useState(false);
  const handleToggle = () => {
    // setActive(!isactive);
  };

  return (
    <>
      <nav className="z-10 relative" x-data="{open:false,menu:false, lokasi:false}">
        {/* bg-dark */}
        {/* full width */}
        <div className="sticky z-10 bg-dark shadow">
          {/* max-width */}
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            {/* main navbar */}
            <div className="relative flex items-center justify-between h-16">
              <Link className="flex-shrink-0" to="/#top" classNameName="mr-32">
                <img className="block lg:hidden h-10 w-16" src={logo} alt="Logo" />
                <img
                  className="hidden lg:block h-10 w-auto"
                  src={logo}
                  alt="Logo"
                />
              </Link>
              <div className=" max-w-2xl max-h-6 overflow-x-scroll">
                {/* <button className={`${isactive ? "active" : ""} px-2`}>
                  #news
                </button> */}
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #sport
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #tech
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #world
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #finance
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #politics
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #business
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #economics
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #entertainment
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #beatuy
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #travel
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #music
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #food
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #science
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : null} px-2`}
                >
                  #gmaing
                </button>
                <button
                  onClick={handleToggle}
                  className={`${isactive ? "active" : " "} px-2`}
                >
                  #energy
                </button>
              </div>
              <link
                rel="stylesheet"
                href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
              />

              <div className="max-w-2xl mx-auto">
                <form className="flex items-center">
                  <label for="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search..."
                      required
                    />
                    <button
                      type="button"
                      class="flex absolute inset-y-0 right-0 items-center pr-3"
                    >
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="mr-2 -ml-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    Search
                  </button>
                  <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                </form>
              </div>
              <FaUserAlt className="mx-10" />
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
