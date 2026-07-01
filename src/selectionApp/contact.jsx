import { MessageCircleIcon, Plus, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Newpost from "./addNewPost";
import { Minus } from "lucide-react";

 function Contact(){
    const [isOpen,setIsOpen]= useState(false);

    const open = ()=>{
        isOpen(true)
        setIsOpen(isOpen);
    }
    return(
            <>
                    <div className=" bottom-10 right-10 fixed ">
                    <div 
                        // onClick={()=> open(setIsOpen(!isOpen))}
                        
                        className="bg-green-500 px-3 py-3 rounded-full  hover:cursor-pointer"> 

                        {
                            isOpen && <Newpost isOpen={isOpen} setIsOpen={setIsOpen} />
                        }
                        
                        {isOpen ? (
                            <X
                                onClick={()=> setIsOpen(!isOpen)} 
                                size={30}
                                className=" transition-30 animate-pulse "
                            />
                        ):(
                           <Plus
                                onClick={()=> setIsOpen(!isOpen)} 
                                size={30}
                                className=" transition-30 animate-pulse "
                            /> 
                        )}
                        
                        
                    </div>
                </div>
            </>
        
    )
}
export default Contact;
