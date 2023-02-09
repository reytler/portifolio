import { Wrapper } from "./style";

export default function Container({children}:any){
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}