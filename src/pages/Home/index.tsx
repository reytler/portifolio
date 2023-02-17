import Container from "../../components/Container";
import TextAbout from "../../components/TextAbout";
import { Img, Wrapper } from "./styles";

export function Home(){
    return(
        <Container>
            <Wrapper>
                <TextAbout/>
                <Img src={process.env.PUBLIC_URL + "/photohome.png"} alt="photohome"/>
            </Wrapper>
        </Container>
    )
}