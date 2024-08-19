"use client";
import { navData } from "@/constants";
import Link from "next/link";

import { NavbarAnimation } from "@/global/Animation";
import { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { FaBarsProgress } from "react-icons/fa6";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { btnPrimary as PrimaryButton } from "../ui/button";
import Logo from "../ui/logo";
const Navbar = () => {
  const [nav, setNav] = useState("");
  // showNav function
  const showNav = () => setNav(!nav);
  // closeNav function
  const closeNav = () => setNav(false);
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <NavbarAnimation>
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <PrimaryButton
            text={"Build now"}
            icon={<HiOutlineBuildingStorefront size={30} />}
          />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2   h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={showNav}
          >
            <span className="sr-only">Open main menu</span>
            {nav ? (
              <CgCloseR size={35} onClick={closeNav} />
            ) : (
              <FaBarsProgress size={32} />
            )}
          </button>
        </div>
        <div
          className={
            nav
              ? "items-center justify-between  w-full md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden  w-full md:flex md:w-auto md:order-1"
          }
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navData.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="block py-2 px-3 text-black   rounded md:bg-transparent   md:p-0  dark:text-gray-50 hover:font-semibold hover:text-gray-400"
                    onClick={closeNav}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </NavbarAnimation>
    </nav>
  );
};

export default Navbar;
