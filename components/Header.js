import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex items-center bg-gray-100 p-1 flex-grow py-2">
      <div className="mt-2 flex items-center flex-grow sm:grow-0">
        <Image
          src="/grasperlogo.png"
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
