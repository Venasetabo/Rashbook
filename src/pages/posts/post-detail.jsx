import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, DeleteIcon,Trash2, FileText, User, Flag } from "lucide-react";
import MainLayout from "../../components/shared/main-layout";
import { PostDetailSkeletton } from "../../components/ui/skeleton";
import { useComment } from "../../hooks/use-Comment";
import { usePostDetail } from "../../hooks/use-post-detail";
import Delete from "../../components/ui/delete"


export default function PostDetail() {
  const {postId} = useParams();
  const {post, isLoading} = usePostDetail(postId)
  const {comments, loadingComment} = useComment(postId)
  const [isOpen, setIsOpen] = useState(false)


  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-text transition-colors mb-8 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Retour aux questions
        </Link>

        <article className="border-b border-muted/10 pb-12">
         {isLoading ?(
          <PostDetailSkeletton />
         ): post && (

          <>
           <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted/60 mb-4">
           <div  className="flex items-center gap-4"> 
                    <div className="flex items-center gap-1.5">
                  <FileText size={14} />
                  <span>POST #{post.id} </span>
                </div>
                <div className="w-1 h-1 rounded-full bg-muted/30"></div>
                <div className="flex items-center gap-1.5">
                  <User size={14} />
                  <span>Auteur ID: {post.userId}</span>
                  
                </div>
              
           </div>
           <Trash2 
            size={14}
            onClick={()=> setIsOpen(true)}
            className="hover:text-red-400 hover:cursor-pointer"
            />
            
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-text capitalize mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed first-letter:text-3xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:text-text">
            {post.body}
          </p>
          
          </>

         )}
         
        </article>

        <div className="mt-8">
          {loadingComment ? (
            <div className="space-y-6">
              {[1,2,3].map((comment, index)=> (
                comments.map((_, index) => (
                  <PostDetailSkeletton key={index} />
                ))
              ))}
            </div>
          ): (comments && comments.length > 0) ? (
            comments.map((comment, index)=> (
              <div key={index}>
                <h3 className="text-sm font-bold text-text mb-1">
                  {comment.name} - <span className="text-xs text-muted">{comment.email}</span>
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {comment.body}
                </p>
              </div>
            ))

          ) : (
            <p className="text-sm text-muted ">Aucun commentaire disponible</p>
          )}
        </div>
      </div>
      <Delete

      isOpen={isOpen}
      setIsOpen={setIsOpen} 
      postId={postId}
      
      />
    </MainLayout>
  );
}
