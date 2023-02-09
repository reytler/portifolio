import Logo from "../Logo";
import { NavItem } from "../NavIntem";
import { MenuMobile, Wrapper } from "./styles";
import {FaGithub,FaInstagram, FaLinkedin} from "react-icons/fa";
import MenuIcon from "../menuIcon";
import { useState } from "react";
import Swicth from "../Switch";
import SocialIcons from "../sociaIIcons";

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
                <NavItem title={'Contact'} link={'/contact'}/>
            </span>
            <span className="items768px">
                <SocialIcons/>
            </span>
            <span style={{width:'1vw'}} className="items768px">
                <Swicth/>
            </span>
        </Wrapper>
        <MenuMobile open={open} onClick={()=>toogleMenu()}>
            <NavItem title={'Home'} link={'/'}/>
            <NavItem title={'Skills'} link={'/skills'}/>
            <NavItem title={'Contact'} link={'/contact'}/>
            <SocialIcons/>
            <span className="wrapperswitch">
                <Swicth/>
            </span>
        </MenuMobile>
        </>
    )
}