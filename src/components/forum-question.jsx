import { ImportIcon, MessageSquareText } from "lucide-react";
import { useEffect, useState } from "react";
import { PostSkeletton } from "./ui/skeleton";
import { Link } from "react-router-dom";
import { usePost } from "../hooks/use-post";

export default function ForumQuestion({ title, setIsOpen, setPostEdit }) {
    const {data, loading,currentPage, setCurrentPage} = usePost()

    // const startIndex = (currentPage - 1) * limit;
    // const endIndex = startIndex + limit;
    // const posts = data.slice(startIndex, endIndex)
    console.log(currentPage);
    
    
    return (
        <div className="mt-6">
            <div className="flex justify-between items-center gap-4 mb-4">
                <h2 className="uppercase text-xs font-bold tracking-wider text-muted">
                    {title}
                </h2>
                <div className="flex-1 h-[1px] bg-muted/20"></div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {loading ?(
                        [1,2,3,4].map((_, index)=>(
                            <PostSkeletton key={index} />
                        ))

                ) : data.length > 0 ? data.map((question) => (
                    <div
                        key={question.id} 
                        className="flex flex-col justify-between p-4 rounded-xl border border-muted/10 bg-surface-card hover:border-muted/30 transition-colors"
                    >

                        <div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted mb-2">
                                    <MessageSquareText size={12} />
                                    <span>TICKET #{question.id}</span>
                                </div>

                           <button
                           onClick={()=>{
                            setPostEdit(question)
                            setIsOpen(true)
                           }}
                            className="text-muted px-3 py-1 rounded-2xl text-sm hover:text-btn cursor-pointer">Modifier</button>

                            </div>
                           <Link 
                           to={`/posts/${question.id}`}
                           >
                            <h3 className="font-bold text-base text-text line-clamp-1 capitalize mb-1">
                                {question.title}
                            </h3>

                            <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                                {question.body}
                            </p>
                           </Link>
                        </div>
                    </div>
                )):(
                    <h1 className="text-white text-4xl">Aucune donnée disp.</h1>
                )}
            </div>
            <div className="flex justify-end gap-3">
                <button 
                disabled={currentPage===1}
                className={`text-white py-2 px-2 border border-border text-text py-1 px-2 rounded-lg ${currentPage === 1 ? "text-muted" : "text-text"}`}
                onClick={()=> setCurrentPage(currentPage - 1)}
                >Precedent</button>
                <button
                className="text-white bg-btn border-border px-2 py-1 rounded-lg"
                onClick={()=> setCurrentPage(currentPage + 1)}
              >Suivant</button>
            </div>
        </div>
    );
}