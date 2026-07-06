import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./navbar";
import Hero from "./hero";

function Application() {
  return (
    <>
      <NavBar />
      <Hero />

      <div className="bg-slate-300 w-full h-auto flex pb-5 flex-wrap justify-center items-center gap-12 p-2 lg:grid-cols-2 entre">
        <Outlet />
        {/* <h1>Chargement...</h1> */}
            <div className="h-15 w-15 flex justify-center text-center items-center rounded-full animate-spin rotate-45 bg-gradient-to-br from-white to-white border-2 border-white">
              <div className="h-15 w-15 rounded-full bg-slate-300 "></div>
            </div>
      </div>
    </>
  );
}

// md:tablette
// lg:microsoft surface duo 1114
// xl:macbook 1280

export default Application;
