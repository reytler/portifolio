import { useEffect, useState } from "react"

export default function Project({url}:any){
    const [previewData, setPreviewData] = useState(null);
    const CORS_PROXY = 'https://crossorigin.me/';

    useEffect(()=>{
        async function getData(){
          
            try {
                const res = await fetch(url,{mode:'no-cors'});
                console.log('RES: ',res)
            } catch (error) {
                console.log('ERROR: ',error)
            }
        }

        getData()
    },[])

    return(
        <>
            <h1>{url}</h1>
        </>
    )
}