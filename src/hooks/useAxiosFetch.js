import { useState,useEffect } from "react";
import axios from 'axios'
const useAxiosFetch = (category)=>{

    const [isLoading,setIsLoading]= useState(false);
    const [data,setData]= useState([])
    const [error,setError]= useState(null)
  //  const URL="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"

    useEffect(()=>{
            let isMounted = true;
            const fetchData = async ()=>{

                setIsLoading(true)
                try{
                const response = await axios.get(`https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`);
                const data = await response.data.entries;
                const data2= data?.filter(d=> (d.programType===category && d.releaseYear >2010)).sort((a,b)=>a.title.localeCompare(b.title))
                    if(isMounted){
                        setData(data2);
                        setIsLoading(false)
                    }

                }catch(err){
                    if(isMounted){
                        setError("Oops something went wrong!!")
                        setData([])
                    }

                }finally{
                    if(isMounted){
                        setIsLoading(false)
                    }

                }
            }

            fetchData();
            return ()=>{
                isMounted=false;
            }

    },[])

    return {isLoading,data,error}

}

export default useAxiosFetch;