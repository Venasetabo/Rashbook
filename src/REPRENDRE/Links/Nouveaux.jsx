import { useState } from "react";
import Posts from "../components/posts";
import H1Title from "../components/H1TITLE";

export default function Nouveaux(){ 
    const [posts, setPosts] = useState([1,2,3]);
    return(
    <>
    {/* <H1Title
       h1TitleStyle={'bg-slate-100 text-blue-500  p-4'} 
       h1Title={'Les nouveaux livres'}
     /> */}
    <Posts />
    <Posts />
    <Posts />
    <Posts />
    

    </>
    )
}