"use client"
import Link from "next/link";
import React,{useState} from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Menu } from 'lucide-react';

import { usePathname } from "next/navigation";

const NavBar = () => {
  interface routes {
    name: string;
    link: string;
  }
  const pathname = usePathname();
  const [open,setOpen]=useState(false)

  
  const pages: routes[] = [
    { name: "Home", link: "/" },
    { name: "quaid biking dubai", link: "/quad-biking-dubai" },
    { name: "family buggies dubai", link: "/family-buggies-dubai" },
    { name: "dune baggy dubai", link: "/services" },
    { name: "patner", link: "/patner" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className="flex lg:justify-evenly justify-between px-5 lg:px-0 text-white bg-[#000000] fixed top-0 left-0 w-full h-20 lg:h-24 z-50">
      <div className=" h-full lg:w-[35%] flex items-center lg:justify-end justify-center ">
        <div className="">
          <img
            className="lg:w-24 lg:h-full w-[70px] h-[70px]"
            src="https://globaldesertadventure.com/wp-content/uploads/2025/04/Global-Desert-Adventure-Logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="   h-full  w-full hidden lg:block">
        <div className="flex justify-center gap-x-7 capitalize items-center h-full mt-1">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.link}
              className={` ${pathname == page.link ? "text-orange-400" : ""}  text-sm hover:text-orange-400 font-medium`}
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="  justify-start gap-x-6 items-center h-full w-[35%] hidden lg:flex  ">
        <div>
          {/* <span className="bg-red-400 rounded-full h-4">0</span> */}
          <ShoppingCart className="text-white w-6 h-6 " />
        </div>
        <div>
          <button className="px-10 text-white py-3 outline-2 outline-orange-500">
            Book online
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className=" flex justify-center items-center   lg:hidden ">
        <div className="flex justify-between gap-x-12 items-center">
           <ShoppingCart className="text-white w-5 h-5 " />
           <div
          className="flex items-center justify-center h-10 w-10"
          onClick={() => setOpen((pre) => !pre)}
        >
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        </div>


        <div className={`absolute top-20 -right-20 ${open ? "w-2/3 right-0" : "w-0"}  overflow-hidden transition-all duration-500 ease-in-out bg-white/90 text-black backdrop-blur-md p-5 flex flex-col items-start px-10  gap-y-4 h-screen`}>
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.link}
              className={` ${pathname == page.link ? "text-orange-400" : ""}  text-sm hover:text-orange-400 font-medium`}
            >
              {page.name}
            </Link>
          ))}

        </div>



        
      </div>
    </div>
  );
};

export default NavBar;
