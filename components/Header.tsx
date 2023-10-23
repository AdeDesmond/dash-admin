"use client";

import Image from "next/image";
import React from "react";
import { BellIcon } from "lucide-react";
function Header() {
  return (
    <header className="flex justify-between w-full px-4 py-4">
      <div>
        <BellIcon size={24} />
      </div>
      <div className="flex items-center gap-x-2  shadow-md p-1 rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1697660256381-48717eec6dbb?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile image"
          height={20}
          width={20}
          className="rounded-full h-7 w-7 object-cover"
        />
        <p className="text-slate-400">name of user</p>
      </div>
    </header>
  );
}

export default Header;
