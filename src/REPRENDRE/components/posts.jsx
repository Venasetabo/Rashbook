import { Eye, Send, Share, ThumbsDownIcon, ThumbsUp } from "lucide-react";
import { Fragment } from "react";

export default function Posts({titre, contenu, date, auteur, image}) {
  return (
    <Fragment>
      
            <div className="bg-slate-900 w-150 h-65  hover:bg-slate-400 rounded-lg flex justify-center text-center items-center">
             
              <div className=" w-1/1 h-65 rounded-l-lg">
                <h1 className="ml-2 mt-4 mb-2 text-left text-blue-500 line-clamp-2 ">{titre}</h1>
                <p className="text-white text-left ml-2 line-clamp-4">{contenu}</p>
               <div className="flex justify-start items-center gap-2.5 ml-4 mt-2">
                <h1 className="text-gray-500 mt-2">Publie le <span className="text-slate-800">{date}</span></h1>
                <h1 className="text-gray-500 mt-2">par <span className="text-slate-800">@{auteur}</span></h1>

               </div>
                <div className="flex p-7 gap-2.5">
                  <button className="py-1 px-2 bg-orange-500 rounded-lg font-bold text-white"><ThumbsUp /></button>
                  <button className="py-1 px-2 bg-blue-500 rounded-lg font-bold"><Send /></button>
                  <button className="py-1 px-2 bg-lime-500 rounded-lg font-bold"><Eye /></button>
                </div>
              </div>

              <div className=" w-57 justify-center h-65 rounded-r-lg ">
              <img src={image}
              className="h-65 object-cover w-57 rounded " alt="logo de paweb-c" />
              </div>
              
            </div>
        
    </Fragment>
  );
}

