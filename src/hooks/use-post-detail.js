import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export function usePostDetail(postId){
    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    
      useEffect(() =>{
        setIsLoading(true);
        if (!postId)return;
        const fetchPostDetail = async () => {
          try{
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            if (!res.ok) throw new Error("failed to fetch post detail");
            const post = await res.json();
            setPost(post)
    
    
          }catch(error){
            console.error('Error fetching post detail',error);
    
          }
          finally{
            setIsLoading(false);
          }
        }  
        fetchPostDetail(); 
      },[postId])
    return {post, isLoading};
}