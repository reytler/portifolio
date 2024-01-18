import { Wrapper } from "./style";

interface thumbProps {
    link: string
    img: string
}

export function Thumb({img,link}:thumbProps){

    function openProject(url:string){
        window.open(url,"_black");
    }

    return(
        <Wrapper title="Click to access the website" onClick={()=>openProject(link)}>
            <img src={img} alt="Thumb of project"/>
        </Wrapper>
    )
}