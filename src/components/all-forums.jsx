import { Plus } from "lucide-react";
import ForumQuestion from "./forum-question";
import Form from "./form";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


export default function Forums() {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [postEdit,setPostEdit] = useState(null)
    return (
        <>
            <div className="py-5">
                <div className="sticky top-0 bg--background py-4 flex justify-between gap-4">
                    <h1 className="text-text font-black text-2xl">
                        {t("sidebar.forum")}
                    </h1>
                    <button
                        onClick={()=> setIsOpen(!isOpen)}
                        className="bg-btn font-bold py-1 px-3 text-sm flex items-center gap-1 rounded-lg">
                        <Plus size={15} />
                        Thread
                    </button>
                </div>

                <div className="">
                    <ForumQuestion title="support"
                     setIsOpen={setIsOpen}
                     setPostEdit={setPostEdit}
                     />
                </div>
            </div>

            <Form
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                postEdit={postEdit}
                
            />
        </>
    );
}
