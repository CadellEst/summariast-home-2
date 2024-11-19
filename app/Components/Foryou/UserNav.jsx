import React from "react";
import Image from "next/image";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { BsPen } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import logo from "../../assets/logo.png"

export default function UserNav(auth) {
  return (
    <div className="bg-slate-100 w-[200px] min-w-[200px] fixed top-0 left-0 h-lvh z-10 m-auto">
      <div className="flex items-center justify-center h-[60px] pt-4 max-w-40 m-auto">
        <Image className="w-full h-10" src={logo} />
      </div>
      <div className="flex flex-col justify-between h-[calc(100vh-60px)] pb-5 overflow-y-auto">
        <div className="flex mt-10 flex-col">
          <a
            href="/for-you"
            className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer"
          >
            <div className="h-full w-[5px] bg-[#2bd97c] mr-4 z-50"></div>
            <IoHomeOutline className="text-2xl" />
            For You
          </a>
          <a
            href="/for-you"
            className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer"
          >
            <div className="w-[5px] h-full bg-transparent mr-4"></div>
            <CiBookmark className="text-2xl" />
            My Library
          </a>
          <a
            href="/for-you"
            className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer"
          >
            <div className="w-[5px] h-full bg-transparent mr-4"></div>
            <BsPen className="text-2xl" />
            Highlights
          </a>
          <a
            href="/for-you"
            className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer"
          >
            <div className="w-[5px] h-full bg-transparent mr-4"></div>
            <TfiSearch className="text-2xl" />
            Search
          </a>
        </div>

        <div className="flex flex-col">
          <a
            href=""
            className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer"
          >
            <div className="w-[5px] h-full bg-transparent mr-4"></div>
            <IoSettingsOutline className="text-2xl" />
            Settings
          </a>
          <a
            href=""
            className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer"
          >
            <div className="w-[5px] h-full bg-transparent mr-4"></div>
            <IoIosHelpCircleOutline className="text-2xl" />
            Help & Support
          </a>
          {!auth ? (
            <>
              <a
                href=""
                className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer"
              >
                <div className="w-[5px] h-full bg-transparent mr-4"></div>
                <IoIosLogIn className="text-2xl" />
                Login
              </a>
            </>
          ) : (
            <>
              <a
                href=""
                className="flex items-center h-14 text-[#032b41] mb-2 cursor-pointer"
                onClick={null}
              >
                <div className="w-[5px] h-full bg-transparent mr-4"></div>
                <IoIosLogOut className="text-2xl" />
                Logout
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
