import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-slate-900 border-t-2 dark:border-gray-700  ">
      <div className=" p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo"></img>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MovieMate
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                Home
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            MovieMate™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
