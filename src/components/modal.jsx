
export default function Modal({setIsOpen, isOpen}){
    return (
        <div className={`absolute left-1/3 shadow-2xl bg-white h-1/3 rounded-2xl p-5 w-1/3 shadow-gray-300 transition-all duration-500 ease-in-out ${isOpen ? "top-10" : "-top-full"} `}>
            <small
                onClick={()=> setIsOpen(false)}
                className="text-2xl font-black">x</small>

            <div className="mt-5">
                <h1 className="text-2xl font-black text-blue-950 text-center">
                    Mon modal
                </h1>
                <p className="mt-3 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Numquam, dolorem?
                </p>
            </div>
        </div>
    )
}