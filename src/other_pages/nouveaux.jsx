import { Fragment } from "react"
import LandingPage from "../SelectionApp/landingPage"
import Searchbox from "../SelectionApp/searchBox"

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