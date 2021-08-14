import React from "react";
import Image from "next/image";
import { ChatAltIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <div className="flex items-center bg-gray-100 p-2 flex-grow py-2">
      <div className="m-2 flex items-center flex-grow sm:flex-grow-0">
        <Image
          src="/grasperlogo.png"
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
      {/* Search */}
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-300">
        <input
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          type="text"
        />
        <SearchIcon className="h-12 p-4" />
      </div>
      {/* Right */}
      <div className="text-black flex items-center  text-xs space-x-6 mx-6 whitespace-nowrap">
        <div className="cursor-pointer link">
          <p className="font-extrabold md:text-sm">Home</p>
          <p className="font-extrabold md:text-sm">About</p>
        </div>
        <div className="cursor-pointer link">
          <p className="font-extrabold md:text-sm">Team &</p>
          <p className="font-extrabold md:text-sm">Testimonials</p>
        </div>
        <div className="relative flex items-center cursor-pointer link">
          <ChatAltIcon className="h-6" />
          <p className="hidden md:inline  font-extrabold">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
