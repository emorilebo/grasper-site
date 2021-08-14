import React from "react";
import Image from "next/image";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <div className="flex items-center bg-gray-100 p-4 flex-grow py-2">
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
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500">
        <input
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          type="text"
        />
        <SearchIcon className="h-12 p-4" />
      </div>
      {/* Right */}
      
    </div>
  );
}

export default Header;
