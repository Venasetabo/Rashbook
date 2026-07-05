import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
         <div className="bg-slate-900 w-full h-25 flex justify-between items-center ">
            <div className="flex text-center items-center gap-2">
                <img 
                   src="/profil3.jpg" alt="profil picture"
                   className="rounded-full w-10 h-10 ml-5 hidden lg:flex md:flex xl:flex"
                />
                <h1 className="text-blue-500 ml-5 text-xl lg:ml-1 md:ml-1 xl:ml-1">RASIDI.</h1>
            </div>
            <ul className="hidden lg:flex xl:flex md:flex justify-center items-center">
                 <ul className="flex gap-6 mr-3">
                    <li className="text-amber-50 rounded-lg text-[15px] hover:text-blue-500 hover: mb-2 cursor-pointer">Home</li>
                    <li className="text-amber-50 rounded-lg text-[15px] hover:text-blue-500  hover: mb-2 cursor-pointer">Books</li>
                    <li className="text-amber-50 rounded-lg text-[15px] hover:text-blue-500  hover: mb-2 cursor-pointer ">PAWEB-C</li>
                    <li className="text-amber-50 rounded-lg text-[15px] hover:text-blue-500  hover: mb-2 cursor-pointer">All.</li>
                </ul>
            </ul>
            <button className="bg-blue-500 text-slate-900  px-10 py-2 shadow-md cursor-pointer worD transition-shadow duration-300 rounded-full mr-5 text-[15px] hover:bg-blue-400 hidden lg:block xl:block md:block">Contact</button>
           {!isOpen ? ( <Menu  
              className="font-bold text-blue-500 m-5 lg:hidden md:hidden"
              onClick={()=> setIsOpen(!isOpen)}
            />):(
            <X  
              className="font-bold text-blue-500 m-5 lg:hidden md:hidden"
              onClick={()=> setIsOpen(!isOpen)}
            />
           )}
         </div>

         {isOpen &&  (
            <div className="bg-slate-800 w-full h-73 block absolute border-b border-blue-900 lg:hidden md:hidden">
                <ul className="block gap-6">
                    <li className="bg-slate-700 text-amber-50 p-2 rounded-lg hover:bg-slate-600 mb-2">Home</li>
                    <li className="bg-slate-700 text-amber-50 p-2 rounded-lg hover:bg-slate-600 mb-2">Services</li>
                    <li className="bg-slate-700 text-amber-50 p-2 rounded-lg hover:bg-slate-600 mb-2">About</li>
                    <li className="bg-slate-700 text-amber-50 p-2 rounded-lg hover:bg-slate-600 mb-2 ">PAWEB-C</li>
                    <li className="bg-slate-700 text-amber-50 p-2 rounded-lg hover:bg-slate-600 mb-2 ">Blog</li>
                </ul>
                <button className="bg-blue-600 p-2 rounded-full w-full hover:bg-blue-500">contact</button>
            </div>
         )}
        </>
    )
}






// md:tablette
// lg:microsoft surface duo 1114
// xl:mac-book 1280