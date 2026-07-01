import LandingPage from "../selectionApp/landingPage";
import Searchbox from "../selectionApp/searchBox";

export default function Recents() {
    return(
        <>
        <Searchbox
        placeholder={'recents'} />
        <LandingPage />
        <LandingPage />
        <LandingPage />
        </>
    )
}