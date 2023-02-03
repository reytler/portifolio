import Logo from "../Logo";
import { NavItem } from "../NavIntem";
import { MenuMobile, Wrapper } from "./styles";
import {FaGithub,FaInstagram, FaLinkedin} from "react-icons/fa";
import MenuIcon from "../menuIcon";
import { useState } from "react";

export function Navbar(){

    const [open,setOpen] = useState(false)

    return(
        <>
        <Wrapper>
            <MenuIcon setOpen={setOpen}/>
            <Logo/>
            <span className="items768px">
                <NavItem title={'Home'} link={'/'}/>
                <NavItem title={'Skills'} link={'/skills'}/>
                <NavItem title={'Portifolio'} link={'/portifolio'}/>
                <NavItem title={'Contact'} link={'/contact'}/>
            </span>
            <span className="items768px">
                <a href="https://github.com/reytler" target={'_blank'} rel="noopener noreferrer">
                    <FaGithub size={40} className="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/reytlersouza-dev/" target={'_blank'} rel="noopener noreferrer">
                    <FaLinkedin size={40} className="icon"/>
                </a>
                <a href="https://www.instagram.com/reytlermatheus/" target={'_blank'} rel="noopener noreferrer">
                    <FaInstagram size={40} className="icon"/>
                </a>
            </span>
        </Wrapper>
        <MenuMobile open={open}>
            <h1>Mobile aqui</h1>
        </MenuMobile>
        </>
    )
}