import Container from "../../components/Container";
import TextAbout from "../../components/TextAbout";
import Title from "../../components/Title";
import { Img, Wrapper } from "./styles";

export function Home(){
    return(
        <Container>
            <Wrapper>
                <div>
                    <Title title={'About me'}/>
                        <Img src={process.env.PUBLIC_URL + "/photohome.png"} alt="photohome" className="mobile"/>
                    <TextAbout/>
                </div>
                <Img src={process.env.PUBLIC_URL + "/photohome.png"} alt="photohome" className="monitor"/>
            </Wrapper>
        </Container>
    )
}