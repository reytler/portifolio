import { Wrapper } from "./styles";
import { Link } from "react-router-dom";

export function NavItem({title,link}:any){
    return(
        <Link to={link} style={{textDecoration:'none'}}>
            <Wrapper>{title}</Wrapper>
        </Link>
    )
}