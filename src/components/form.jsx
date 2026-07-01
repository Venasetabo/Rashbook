import { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/button";

let initialData = {
  title: "",
  body: "",
  
};

export default function Form({ isOpen, setIsOpen, postEdit}) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isPending, setIsPendind] = useState(false)
  const navigate = useNavigate()
  const isPostEdit = !!postEdit

  console.log('post edit:', postEdit)
  console.log("ispostEdit:", isPostEdit)

  useEffect(()=> {
    if(isPostEdit){
      setFormData({
        title: postEdit.title || "",
        body: postEdit.body  || ""

      })
    }
  }, [postEdit])

  const onSubmit = (e) => {
    e.preventDefault();
    let new_errors = {};
    setIsPendind(true)

    if (!formData.title)
      new_errors.title = "Veuillez spécifier le sujet de votre discussion";
    if (!formData.body)
      new_errors.body = "Le contenu de votre message ne peut pas etre vide"
    setErrors(new_errors);

    if (Object.keys(new_errors).length === 0) {
     const sendData = async ()=> {
       try{
        const url = isPostEdit ?
        `https:/jsonplaceholder.typicode.com/posts/${postEdit.id}` :
        `https:/jsonplaceholder.typicode.com/posts`;
        const method = isPostEdit ? "PUT" : "POST";

        const response = await fetch(url,{
        method,
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: 1,
          title: formData.title,
          body:formData.body

        })
      })

      if(!response.ok) throw new Error("Error to send PostData")

      alert("Formulaire envoye avec succes")
      setFormData(initialData)
      setIsOpen(false)

      // navigation et chargement de page
      // window.location.href = "/"

      // navigation sans chargement de page
      // navigate("/following")
      // retour a la page precedente

      navigate(1)

      }catch(error){
        console.log("FAILED_TO_SEND_POST_DATA", error)
      }
      finally{
        setIsPendind(false)
      }
     }
     sendData()
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
    >
      <form
        onSubmit={onSubmit}
        className={`absolute left-1/2 -translate-x-1/2 bg-card border border-gray-200/20 shadow-2xl rounded-xl p-6 w-full max-w-2xl transition-all duration-300 ease-in-out ${isOpen ? "top-[50px]" : "-top-full"}`}
      >
        <div className="border-b border-gray-400/10 pb-3 mb-5 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-xl text-text">
             {isPostEdit ? "Modifier le post" : "Creer un nouveau Post"}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              Partagez vos idées ou posez une question à la communauté
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setFormData(initialData);
            }}
            className="text-gray-400 hover:text-gray-600 text-sm font-medium"
          >
            Annuler
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
              Sujet de la discussion
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="De quoi voulez-vous parler ?"
              className="px-3 py-2.5 bg-background text-muted rounded-lg border border-gray-300/20 focus:border-indigo-500 focus:ring-1 focus:ring-blue-500 w-full text-sm"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1 font-medium">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
              Message
            </label>
            <textarea
              rows={6}
              value={formData.body}
              onChange={(e) =>
                setFormData({ ...formData, body: e.target.value })
              }
              placeholder="Développez votre sujet ici... Vous pouvez poser des questions ou détailler votre problème."
              className="px-3 py-2.5 bg-background text-muted rounded-lg border border-gray-300/20 focus:border-indigo-500 focus:ring-1 focus:ring-blue-50 w-full text-sm outline-none resize-y min-h-[100px]"
            />
            {errors.body && (
              <p className="text-red-500 text-xs mt-1 font-medium">
                {errors.body}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-300/10 flex justify-end gap-3">
          <Button
            isPendind={isPending}
            text="Publier le sujet"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-3 border-0 rounded-lg text-sm shadow-sm"
          />
        </div>
      </form>
    </div>
  );
}
