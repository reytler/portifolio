import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Icon, Wrapper } from "./style";

export default function SocialIcons(){
    return(
        <Wrapper>
            <Icon href="https://github.com/reytler" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon"/>
            </Icon>
            <Icon href="https://www.linkedin.com/in/reytlersouza-dev/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon"/>
            </Icon>
            <Icon href="https://www.instagram.com/reytlermatheus/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon"/>
            </Icon>
        </Wrapper>
    )
}