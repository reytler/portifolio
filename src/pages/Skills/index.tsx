import { useRef, useState } from "react";
import { Btntop } from "../../components/btnTop";
import Container from "../../components/Container";
import Grid from "../../components/GridSkills";

import {IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import {GrReactjs} from 'react-icons/gr';
import {TbBrandNextjs} from 'react-icons/tb';
import {DiDotnet} from 'react-icons/di';
import {GiOctopus} from 'react-icons/gi';
import {SiStyledcomponents, SiJest, SiExpress, SiDotnet, SiDocker, SiTypescript} from 'react-icons/si';

import { Wrapper } from "./style";
import Title from "../../components/Title";
import Project from "../../components/Project";
export default function Skills(){
    const JavaScriptref = useRef<null | HTMLDivElement>(null);
    const Oneref = useRef<null | HTMLDivElement>(null);
    const Tworef = useRef<null | HTMLDivElement>(null);
    const Threeref = useRef<null | HTMLDivElement>(null);
    const Topref = useRef<null | HTMLDivElement>(null);

    const [skills] = useState([
        {skill:'JavaScript',function:goToJavaScript,icon:(<IoLogoJavascript/>)},
        {skill:'TypeScript',function:goToReactJS,icon:(<SiTypescript/>)},
        {skill:'ReactJS',function:goToReactJS,icon:(<GrReactjs/>)},
        {skill:'NextJS',function:goToNextJS,icon:(<TbBrandNextjs/>)},
        {skill:'Context-api',function:goToReactJS,icon:(<GrReactjs/>)},
        {skill:'Styled-components',function:goToStyled,icon:(<SiStyledcomponents/>)},
        {skill:'Jest',function:goToJest,icon:(<SiJest/>)},
        {skill:'NodeJS',function:goToNodeJS,icon:(<IoLogoNodejs/>)},
        {skill:'Express',function:goToNodeJS,icon:(<SiExpress/>)},
        {skill:'Dotnet',function:goToDotnet,icon:(<SiDotnet/>)},
        {skill:'ASP.NET',function:goToDotnet,icon:(<DiDotnet/>)},
        {skill:'Entity Framework',function:goToDotnet,icon:(<DiDotnet/>)},
        {skill:'Docker',function:goToDocker,icon:(<SiDocker/>)},
        {skill:'Docker-compose',function:goToDocker,icon:(<GiOctopus/>)},

    ]);

    function goToReactJS(){
        Oneref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToNextJS(){
        Oneref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToJest(){
        Oneref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToStyled(){
        Oneref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToDocker(){
        Oneref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToDotnet(){
        Oneref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToNodeJS(){
        Oneref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToJavaScript(){
        JavaScriptref?.current?.scrollIntoView({behavior:"smooth"})
    }

    return(
        <Container>
            <Wrapper>
                <div style={{minHeight:'100vh'}} ref={Topref}>
                    <Title title={'Skills'}/>
                    <Grid skills={skills}/>
                </div>            
                <div id="one" style={{height:'100vh'}} ref={Oneref}>
                    <h1>One</h1>
                </div>
                <div id="two" style={{height:'100vh'}} ref={Tworef}>
                    <h1>Two</h1>
                </div>
                <div style={{height:'100vh'}} ref={JavaScriptref}>
                    <Project url={'https://github.com/reytler/mycontacts'}/>
                </div>                
                <Btntop backTotop={()=>{Topref?.current?.scrollIntoView({behavior:"smooth"})}}/>
            </Wrapper>
        </Container>
    )
}