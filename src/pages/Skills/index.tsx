import { useRef, useState } from "react";
import { Btntop } from "../../components/btnTop";
import Container from "../../components/Container";
import Grid from "../../components/GridSkills";

import {
    IoLogoJavascript,
    IoLogoNodejs,
    SiStyledcomponents, 
    SiJest, 
    SiExpress, 
    SiDotnet, 
    SiDocker, 
    SiTypescript,
    GrReactjs,
    TbBrandNextjs,
    DiDotnet,
    GiOctopus
} from '../../components/Icons';

import { Wrapper } from "./style";
import Title from "../../components/Title";
import Project from "../../components/Project";
import AreaStacks from "../../components/AreaStatcks";

export default function Skills(){
    const JavaScriptref = useRef<null | HTMLDivElement>(null);
    const Solidref = useRef<null | HTMLDivElement>(null);
    const Reactref = useRef<null | HTMLDivElement>(null);
    const Nextref = useRef<null | HTMLDivElement>(null);
    const Topref = useRef<null | HTMLDivElement>(null);
    const Jestref = useRef<null | HTMLDivElement>(null);
    const Dockerref = useRef<null | HTMLDivElement>(null);

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
        Reactref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToNextJS(){
        Nextref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToJest(){
        Jestref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToStyled(){
        Reactref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToDocker(){
        Dockerref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToDotnet(){
        Nextref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToNodeJS(){
        Solidref?.current?.scrollIntoView({behavior:"smooth"})
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

                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Solidref}>
                    <Project 
                            url={'https://github.com/reytler/apirest-solid'}
                            title={'Api Rest applying SOLID'}
                            description={'Api REST created using the concepts of SOLID and also using the TypeScript.'}
                    >
                        <AreaStacks>
                            <SiTypescript/>
                            <SiExpress/>
                            <IoLogoNodejs/>
                        </AreaStacks>

                        <p style={{fontSize:'12px'}}>
                            click me to see project...
                        </p>

                    </Project>
                </div>

                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Reactref}>
                    <Project 
                            url={'https://github.com/reytler/portifolio'}
                            title={'Portfolio ReactJS'}
                            description={'Portfolio designed to demonstrate my programming skills.'}
                    >
                        <AreaStacks>
                            <SiTypescript/>
                            <GrReactjs/>
                            <SiStyledcomponents/>
                        </AreaStacks>

                        <p style={{fontSize:'12px'}}>
                            click me to see project...
                        </p>

                    </Project>
                </div>

                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Jestref}>
                    <Project 
                            url={'https://github.com/reytler/Token'}
                            title={'Token Management'}
                            description={'The repository can be used as a sub-module for encoding and decoding tokens for the web.'}
                    >
                        <AreaStacks>
                            <SiTypescript/>
                            <IoLogoNodejs/>
                            <SiJest/>
                        </AreaStacks>

                        <p style={{fontSize:'12px'}}>
                            click me to see project...
                        </p>

                    </Project>
                </div>
                
                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Nextref}>
                    <Project 
                            url={'https://github.com/reytler/verzel'}
                            title={'Verzel cars'}
                            description={'Project developed for testing in a development company.'}
                    >
                        <AreaStacks>
                            <SiTypescript/>
                            <DiDotnet/>
                            <TbBrandNextjs/>
                            <GrReactjs/>
                            <SiStyledcomponents/>
                            <SiDocker/>
                            <GiOctopus/>
                        </AreaStacks>

                        <p style={{fontSize:'12px'}}>
                            click me to see project...
                        </p>

                    </Project>
                </div>

                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Dockerref}>
                    <Project 
                        url={'https://github.com/reytler/zabbix_docker'}
                        title={'Zabbix Docker'}
                        description={'Zabbix deployment complete with Docker-Compose'}
                    >
                        <AreaStacks>
                            <SiDocker/>
                            <GiOctopus/>
                        </AreaStacks>

                        <p style={{fontSize:'12px'}}>
                            click me to see project...
                        </p>
                    </Project>
                </div>   

                <div style={{height:'100vh',paddingTop:'30vh'}} ref={JavaScriptref}>
                    <Project 
                        url={'https://github.com/reytler/mycontacts'}
                        title={'MyContacts project of course JStack'}
                        description={'The software is designed to manage personal contacts.'}
                    >
                        <AreaStacks>
                            <IoLogoJavascript/>
                            <GrReactjs/>
                            <SiStyledcomponents/>
                            <SiExpress/>
                            <IoLogoNodejs/>
                        </AreaStacks>

                        <p style={{fontSize:'12px'}}>
                            click me to see project...
                        </p>
                    </Project>
                </div>                
                <Btntop backTotop={()=>{Topref?.current?.scrollIntoView({behavior:"smooth"})}}/>
            </Wrapper>
        </Container>
    )
}