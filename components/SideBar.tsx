"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  SettingsIcon,
  HelpingHandIcon,
  UsersIcon,
  GanttChartSquareIcon,
  LayoutDashboardIcon,
  PackageOpenIcon,
  LogOutIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
function SideBar() {
  return (
    <aside className="bg-slate-100 min-h-screen rounded-md w-[25%] flex flex-col justify-between py-6">
      <div className="flex flex-col gap-y-2 items-start ml-10">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={50}
          height={50}
          className="mt-10 ml-11 mb-10"
        />
        <Button asChild>
          <Link href="/dashboard" className="flex gap-x-1 items-center">
            <LayoutDashboardIcon size={24} />
            Dashboard
          </Link>
        </Button>
        <Button asChild>
          <Link href="/products" className="flex gap-x-1 items-center">
            <PackageOpenIcon size={24} />
            Products
          </Link>
        </Button>
        <Button asChild>
          <Link href="/orders" className="flex gap-x-1 items-center">
            <GanttChartSquareIcon size={24} />
            Orders
          </Link>
        </Button>
        <Button asChild>
          <Link href="/customers" className="flex gap-x-1 items-center">
            <UsersIcon size={24} />
            Customers
          </Link>
        </Button>
        <Button asChild>
          <Link href="/help" className="flex gap-x-1 items-center">
            <HelpingHandIcon size={24} />
            Help
          </Link>
        </Button>
        <Button asChild>
          <Link href="/settings" className="flex gap-x-1 items-center">
            <SettingsIcon size={24} />
            Settings
          </Link>
        </Button>
      </div>
      <Button className="flex gap-x-1 items-center mr-10">
        <LogOutIcon size={24} />
        Sign Out
      </Button>
    </aside>
  );
}

export default SideBar;
