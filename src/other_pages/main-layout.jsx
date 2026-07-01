import { useState } from "react";
import { Outlet } from "react-router-dom";
import Contact from "../selectionApp/contact";
import Fetch from "../selectionApp/fetch";
import LandingPage from "../selectionApp/landingPage";
import Navbar from "../selectionApp/navbar";
import Footer from "../selectionApp/footer";

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