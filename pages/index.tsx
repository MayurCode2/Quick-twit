import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle color="white" />,
  },
  {
    title: "Explore",
    icon: <BiHash color="white" />,
  },
  {
    title: "Notifications",
    icon: <BsBell color="white" />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope color="white" />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark color="white" />,
  },
  {
    title: "Profile",
    icon: <BiUser color="white" />,
  },
];

function index() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 w-screen h-screen px-56">
        <div className=" col-span-3  p-8 ">
          <div className=" text-2xl h-fit w-fit hover:bg-gray-800 p-3 rounded-full  cursor-pointer ">
            <BsTwitter color="white" />
          </div>
          <div>
            <ul>
              {SidebarMenuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-start items-center gap-2 hover:bg-gray-800 rounded-lg text-white px-2 py-2 w-fit   cursor-pointer"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mt-3 px-4 w-full rounded-full">Post</button>
          </div>
        </div>
        <div className=" col-span-6 border-x border-gray-600  "></div>
        <div className=" col-span-3"></div>
      </div>
    </div>
  );
}

export default index;
