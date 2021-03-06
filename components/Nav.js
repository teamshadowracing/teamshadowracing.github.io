import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

import TeamShadowLogo from "./TeamShadowLogo";

const NavLinks = ({ onClick }) => (
  <>
    <li className="mr-3">
      <Link
        className="inline-block py-2 px-4 text-black no-underline"
        href="/"
        onClick={onClick}
      >
        Home
      </Link>
    </li>
    <li className="mr-3">
      <Link
        className="inline-block py-2 px-4 text-black no-underline"
        href="/about"
        onClick={onClick}
      >
        About
      </Link>
    </li>
    <li className="mr-3">
      <Link
        className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
        href="/gallery"
        onClick={onClick}
      >
        Gallery
      </Link>
    </li>
  </>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="header" className="fixed w-full z-30 top-0  bg-white shadow-lg">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-2">
        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-blue-500 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={toggleOpen}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <Link href="/#">
          <h1 className="cursor-pointer">
            <TeamShadowLogo />
          </h1>
        </Link>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <NavLinks />
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      <aside
        className={clsx(
          { "translate-x-0": isOpen },
          { "-translate-x-full": !isOpen },
          "transform",
          "top-0",
          "left-0",
          "w-full",
          "bg-white",
          "fixed",
          "h-full",
          "overflow-auto",
          "ease-in-out",
          "transition-all",
          "duration-300",
          "z-0"
        )}
      >
        <span className="absolute right-0 p-2">
          <svg
            className="h-12 w-12 fill-current text-grey hover:text-grey-darkest"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={toggleOpen}
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
        <div className="p-4">
          <TeamShadowLogo />
        </div>
        <ul className="px-4">
          <NavLinks onClick={toggleOpen} />
        </ul>
      </aside>
    </nav>
  );
};

export default Nav;
