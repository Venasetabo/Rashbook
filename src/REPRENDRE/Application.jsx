import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./navbar";
import Hero from "./hero";

function Application(){

    return(
        <>
        <NavBar />
        <Hero />
        <Outlet />


        </>
    )
}


// md:tablette
// lg:microsoft surface duo 1114
// xl:macbook 1280

export default  Application;