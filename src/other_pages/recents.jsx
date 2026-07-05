import LandingPage from "../SelectionApp/landingPage";
import Searchbox from "../SelectionApp/searchBox";

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