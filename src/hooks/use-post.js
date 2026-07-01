import { useState , useEffect} from "react";
export function usePost(){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [startIndex, setStartIndex] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const limit = 5;
    
    useEffect(()=> {
        setLoading(true);
        
        const offset = (currentPage - 1) * limit;
        
        const fetchPosts = async () => {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&offset=${offset}`, {
                    headers: {
                        "Content-Type" : "application/json"
                    }
                });

                if (!response.ok) throw new Error("Failed to fetch posts")
                 
                    const data = await response.json();
                    setData(data)
                }
                catch(error){
                    console.error("Error of fetching :", error);
                }
                finally{
                    setLoading(false);
                }
            }
        fetchPosts()
    },[])
    
    return {data, loading, currentPage, setCurrentPage}
}
