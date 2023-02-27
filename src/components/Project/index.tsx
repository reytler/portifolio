import Title from "../Title";
import { Description, Wrapper } from "./style";

export default function Project({url,title,description,children}:any){

    function openProject(url:string){
        window.open(url,"_black");
    }

    return(
        <Wrapper onClick={()=>openProject(url)}>
            <Title title={title}/>
            <Description>{description}</Description>
            {children}
        </Wrapper>
    )
}