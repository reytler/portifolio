import { Item, Wrapper } from "./style";

export default function Grid({skills}:any){
    return(
        <Wrapper>
            {
                skills.length > 0 
                ? 
                    skills.map((skill:any, index:number)=>(
                        <Item key={index} onClick={()=>skill.function()}>
                            <i>
                                {skill.icon}
                            </i>
                            {skill.skill}
                        </Item>
                    ))
                :
                        ('No finded skills')
            }
        </Wrapper>
    )
}