import { useState } from "react";
import { Outlet } from "react-router-dom";
import Contact from "../SelectionApp/contact";
import Fetch from "../SelectionApp/fetch";
import LandingPage from "../SelectionApp/landingPage";
import Navbar from "../SelectionApp/navbar";
import Footer from "../SelectionApp/footer";

export default function MainLayout(){

     return(
        <>

        <Contact />
        <Navbar />
        <Fetch />
        <Outlet />
        <Footer />
        </>
     )

}