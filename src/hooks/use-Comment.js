import { useState, useEffect  } from "react";

export function useComment(postId){
    const [comments, setComments] = useState([])
    const [loadingComment, setLoadingComment ] = useState(false)

        useEffect(() =>{
        setLoadingComment(true);
        if(!postId) return;
        const fetchComments = async ()=> {
            try{

            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        
            if(!res.ok) throw new Error("failed to fetch comments");

            const comments = await res.json();
            setComments(comments);
            }catch{
            console.error("Error fetching comments:", error);
            }
            finally{
            setLoadingComment(false);
            }
        }
        fetchComments()
        },[postId])

 return  {comments, loadingComment};

}