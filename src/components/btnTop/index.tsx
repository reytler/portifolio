import { Span } from "./style";

export function Btntop({backTotop}:any){
    return(
        <Span onClick={()=>backTotop()}>&uarr;</Span>
    )
}