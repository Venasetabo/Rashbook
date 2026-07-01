import { useState } from "react";

import SideBar from "./side-bar";
import RightBar from "./right-bar";
import TopBar from "./top-bar";

import Search from "../search";

export default function MainLayout({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main className="bg-background h-screen">
      <div className="">
        <TopBar setSearchOpen={setSearchOpen} />

        <div className="w-[95%] mx-auto grid grid-cols-[0.1fr_1fr] sm:grid-cols-[0.3fr_1fr] lg:grid-cols-[0.3fr_1fr_0.38fr]">
          <SideBar />
          <div className="relative px-4 h-[calc(100vh-81px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-700/10 scrollbar-track-background scrollbar-gutter-both">
            {children}

            <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
          </div>
          <RightBar />
        </div>
      </div>
    </main>
  );
}
