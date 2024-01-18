import Title from "../../Title";
import { Description, Wrapper } from "./style";

export default function Root({title,description,children}:any){

    return(
        <Wrapper>
            <Title title={title}/>
            <Description>{description}</Description>
            {children}
        </Wrapper>
    )
}