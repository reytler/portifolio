import Logo from "../Logo";
import { NavItem } from "../NavIntem";
import { MenuMobile, Wrapper } from "./styles";
import {FaGithub,FaInstagram, FaLinkedin} from "react-icons/fa";
import MenuIcon from "../menuIcon";
import { useState } from "react";
import Swicth from "../Switch";

export function Navbar(){

    const [open,setOpen] = useState(false)
    const [grade,setGrade]=useState(0)

    function toogleMenu(){
        setOpen((prev:boolean)=>!prev)
        setGrade(prev=>(prev === 0 ? 45 :0))
    }


    return(
        <>
        <Wrapper>
            <MenuIcon toogleMenu={toogleMenu} grade={grade}/>
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
            <span style={{width:'1vw'}} className="items768px">
                <Swicth/>
            </span>
        </Wrapper>
        <MenuMobile open={open} onClick={()=>toogleMenu()}>
            <NavItem title={'Home'} link={'/'}/>
            <NavItem title={'Skills'} link={'/skills'}/>
            <NavItem title={'Portifolio'} link={'/portifolio'}/>
            <NavItem title={'Contact'} link={'/contact'}/>
            <span className="social">
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
            <span className="wrapperswitch">
                <Swicth/>
            </span>
        </MenuMobile>
        </>
    )
}