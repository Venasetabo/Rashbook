import { useState } from "react"

export default function Loading(){
  const [loading,setLoading] = useState(true)
    return (
        <>

        {setLoading(true)}
        
          <h1 className="flex justify-center">
            Chargement de Recherche...
          </h1>
        </>

    )
}
