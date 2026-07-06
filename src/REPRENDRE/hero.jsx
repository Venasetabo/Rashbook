import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Tous from "./Links/Tous";
import H1Title from "./components/H1TITLE";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-300 w-1/1 h-30 text-center">
        <div className="w-130 h-15 pl-1  border-[#D0DEEB] border-2 rounded-lg flex gap-1 items-center text-center justify-center lg:justify-between lg:gap-6 sm:gap-6 xl:justify-center xl:gap-4 md:justify-start md:gap-7 ">
          <Link to={"/"}>
            <div className="px-3 lg:px-7 py-2 bg-[#A8B8E1] hover:bg-[#859CD5] cursor-pointer   rounded-lg text-blue-900 ">
              Tous
            </div>
          </Link>
     

          <Link to={"ancients"}>
            <div className="px-3 lg:px-7 py-2 bg-[#A8B8E1] hover:bg-[#859CD5]  cursor-pointer  rounded-lg text-cyan-900 ">
              Anciens
            </div>
          </Link>

          <Link to={"recents"}>
            <div className="px-3 lg:px-7 py-2 bg-[#A8B8E1]  hover:bg-[#859CD5]  cursor-pointer  rounded-lg text-bg-blue-500 ">
              Recents
            </div>
          </Link>

          <Link to={"Nouveaux"}>
            <div className="px-3 lg:px-7 py-2 bg-[#A8B8E1] hover:bg-[#859CD5] cursor-pointer  rounded-lg text-[#0A9141] ">
              Nouveaux
            </div>
          </Link>

          {/* INPIUT FOR RESEARCHING POSTS */}
          {/* <div className="  ml-10 ">
            <input
              type="text"
              className="bg-white px- py-2.5 rounded-bl-lg rounded-tl-lg text-2xl text-black"
              placeholder="Filtrez vos recherches..."
            />
            <Search className=" text-white bg-orange-500 font-bold h-13 w-12 py-2.5 rounded-tr-lg rounded-br-lg -ml-7" />
          </div> */}
        </div>
      </div>
        <H1Title />
    </>
  );
}

// md:tablette
// lg:microsoft surface duo 1114
// xl:macbook 1280
