import { Fragment } from "react"
import LandingPage from "../selectionApp/landingPage"
import Searchbox from "../selectionApp/searchBox"

export default function Nouveaux(){
    return (
        <Fragment>
            
        <Searchbox 
        placeholder={"nouveaux"}/>
        <LandingPage />
        <LandingPage />
        <LandingPage />
        </Fragment>
    )
}