import { MessageSquareWarning } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Delete({isOpen, setIsOpen, postId}){
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();
    


    
    const deletePost =  async ()=>{
          setIsPending(true)
        if(!postId) return;
       try{
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json"
            }

        })
        if(!resp.ok) throw new Error("Error to delete ppost")
            console.log("Post supprimé avec succès");
            navigate("/", {replace:true})
            
       }catch(error){
           console.error("An error occured")
       }
       finally{
          setIsPending(false)
       }
    }
   
    return(
        <div className={`absolute flex justify-center items-center transition-all duration-200 ease-in-out ${isOpen ? "top-0": "-top-full"}`}>
            <div className="bg-slate-800 w-1/1 h-70 rounded-2xl mt-5 text-center">
               <h1 className="text-muted py-1 px-3 mt-4 text-3xl">
                Voulez-vous supprimer cette publication ?
                </h1>
                <div className="flex justify-center">
                    <MessageSquareWarning className="text-red-500 mt-10" size={50} />
                </div>
                <div className="mt-12">
                    <button 

                    className="text-white bg-red-500 rounded px-3 py-3 m-2 cursor-pointer"
                    onClick={deletePost}
                    > {isPending ? "Chargement..." : "Supprimer"} </button>
                <button 
                className="text-white bg-slate-400 rounded px-3 py-3 m-2 cursor-pointer"
                onClick={()=> setIsOpen(false)}
                >Annuler</button>
                </div>
            </div>

        
        </div>
    )
}