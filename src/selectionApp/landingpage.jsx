import { useEffect, useState } from "react"
import Newpost from "./addNewPost";

export default function LandingPage({img, title, sub_title, postedAt, postedBy, Like , Comment}){

   const [like, setLike] = useState(0)
   const [Commented, setCommented] = useState(0)
   const [isOpen, setIsOpen] = useState(true);

   

   localStorage.getItem('like',like)
   localStorage.getItem('comment', Commented)

    return(
        <>
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 mb-4 sm:mb-5 md:mb-6">
            <div className="max-w-7xl mx-auto">
                {/* Card Container - Fully Responsive */}
                <div className="w-full bg-green-100 border-2 border-slate-300 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                    
                    {/* Main Content - Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 p-3 sm:p-4 md:p-5 lg:p-6">
                        
                        {/* Image Container - Responsive Size */}
                        <div className="col-span-1 md:col-span-1">
                            <div className="w-full h-40 sm:h-56 md:h-64 lg:h-80 bg-slate-500 rounded-lg md:rounded-xl overflow-hidden">
                                <img 
                                    src={img}
                                    alt={title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        
                        {/* Content Container - Responsive Text & Spacing */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-between p-2 sm:p-3 md:p-4">
                            
                            {/* Title - Responsive Font Size */}
                            <div className="font-bold uppercase tracking-wide text-slate-900 mb-2 sm:mb-3 md:mb-4">
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl line-clamp-2">
                                    {title}
                                </h2>
                            </div>

                            {/* Description - Responsive Font Size & Line Clamp */}
                            <div className="text-slate-800 mb-3 sm:mb-4 md:mb-6">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
                                    {sub_title}
                                </p>
                            </div>

                            {/* Meta Info - Responsive Font Size */}
                            <div className="text-slate-600 mb-4 sm:mb-6 md:mb-8">
                                <p className="text-xs sm:text-sm md:text-base">
                                    <span className="font-semibold">Publié le:</span> {postedAt} <br className="sm:hidden" />
                                    <span className="hidden sm:inline"> par </span>
                                    <span className="font-semibold text-blue-600">@{postedBy}</span>
                                </p>
                            </div>

                            {/* Action Buttons - Responsive Layout & Size */}
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                                <div className="flex gap-2 sm:gap-3 w-full">
                                    <button 
                                        className="flex-1 sm:flex-initial bg-slate-600 hover:bg-slate-700 active:scale-95 px-3 sm:px-5 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl text-white text-xs sm:text-sm md:text-base font-bold transition-all duration-200 shadow-md"
                                        onClick={()=>{
                                            setLike(like + 1)
                                            localStorage.setItem('like', like + 1)
                                        }}
                                    >
                                        👍 <span className="hidden sm:inline">Like</span> ({like})
                                    </button>
                                    <button 
                                        className="flex-1 sm:flex-initial bg-yellow-500 hover:bg-yellow-600 active:scale-95 px-3 sm:px-5 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl text-white text-xs sm:text-sm md:text-base font-bold transition-all duration-200 shadow-md"
                                        onClick={()=>{
                                            setCommented(Commented + 1)
                                            localStorage.setItem('comment', Commented + 1)
                                        }}
                                    >
                                        💬 <span className="hidden sm:inline">Comment</span> ({Commented})
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    )
}