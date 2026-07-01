export default function Button({ text, className,isPendind}){
    return (
        <button className={` bg-[var(--btn)] ${className}`}>
           {
               isPendind  ?  "Chargement..." : text

           }
            
        </button>
    )
}