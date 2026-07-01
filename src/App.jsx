import { Routes, Route } from "react-router-dom";
import PostDetail from "./pages/posts/post-detail";

const Dashboard = lazy(()=>  import ("./pages/dashboard"));

import Posts from "./pages/posts";
import Following from "./pages/following";
import About from "./pages/about";
import Podcast from "./pages/podcast";
import Delete from "./components/ui/delete";
import { useEffect, useState,lazy, useMemo, useCallback } from "react";

export default function App(){
    const [count,setCount]= useState(0);

    useEffect(()=>{
   
    console.log(count);

    },[count])

   const newtab = useMemo(()=>(
   ['mIReille','MiBarak',555,true]),
   [])

   useCallback(()=> maFonction(), [])
   console.log(newtab);
   
   return (
        <>
        {/* <button 
        className="bg-blue-500 text-white p-5 rounded-2xl"
        onClick={()=> setCount(count + 1)}
        >
          Cliquer
        </button> */}
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/new-posts" element={<Posts />} />

          <Route path="/following" element={<Following />} />
          <Route path="/about" element={<About />} />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
        </>
  )
}
