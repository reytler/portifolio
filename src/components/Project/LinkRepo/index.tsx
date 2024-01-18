import { Warpper } from "./style";

interface propsLinkRepo{
    link: string
}

export function LinkRepo({link}: propsLinkRepo){

    function openProject(url:string){
        window.open(url,"_black");
    }

    return(
        <Warpper onClick={()=>openProject(link)}>
            <p>Link to repository...</p>
        </Warpper>
    )
}