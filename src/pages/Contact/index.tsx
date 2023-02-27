import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { Item, Tooltip, Wrapper } from "./style";

export function Contact(){

    const [visible,setVisible] = useState(false);
    const [text,setText] = useState('Clique para copiar o e-mail!');

    function openProject(url:string){
        window.open(url,"_black");
    }

    function copyEmail(){
        let tag = document.getElementById("email");
        //@ts-ignore
        navigator.clipboard.writeText(tag?.innerHTML)
        setText('E-mail copiado!')
    }

    return(
        <Container>
            <Title title={'Contact me'}/>
            <Wrapper>
                <Item onClick={()=>openProject('https://www.linkedin.com/in/reytlersouza-dev/')}>
                    <FaLinkedin/>
                    <p>Linkedin</p>
                </Item>
                <Item onClick={()=>openProject('https://www.instagram.com/reytlermatheus/')}>
                    <FaInstagram/>
                    <p>Instagram</p>
                </Item>
                <Item 
                    onClick={()=>copyEmail()} 
                    onMouseEnter={()=>setVisible(true)}
                    onMouseLeave={()=>{
                        setVisible(false)
                        setText('Clique para copiar o e-mail!')
                    }}
                >
                    <Tooltip visible={visible}>{text}</Tooltip>
                    <MdOutlineAttachEmail/>
                    <span id="email">reytlercompare@hotmail.com</span>
                    <p>E-mail</p>
                </Item>
            </Wrapper>
        </Container>
    )
}