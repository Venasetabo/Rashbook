import H1Title from "../components/H1TITLE";
import Posts from "../components/posts";

export default function Rencents(){ 
    return(
    <>
    <H1Title 
       h1Title={"Les livres recents"}
        h1TitleStyle={"bg-slate-100  text-blue-500  p-4"} 
    />
        <Posts  />
        <Posts  />
        <Posts  />
        <Posts  />
    </>
    )
}