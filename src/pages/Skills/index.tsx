import { useRef, useState } from "react";
import { Btntop } from "../../components/btnTop";
import Container from "../../components/Container";
import Grid from "../../components/GridSkills";

import {
    IoLogoJavascript,
    IoLogoNodejs,
    SiStyledcomponents, 
    SiJest,  
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
import {Project} from "../../components/Project";

export default function Skills(){
    const Solidref = useRef<null | HTMLDivElement>(null);
    const Reactref = useRef<null | HTMLDivElement>(null);
    const Nextref = useRef<null | HTMLDivElement>(null);
    const Topref = useRef<null | HTMLDivElement>(null);
    const Jestref = useRef<null | HTMLDivElement>(null);
    const Dockerref = useRef<null | HTMLDivElement>(null);

    const [skills] = useState([
        {skill:'Solid Clean Arch',function:goToSolidJS,icon:(<SiTypescript/>)},
        {skill:'JavaScript',function:goToSolidJS,icon:(<IoLogoJavascript/>)},
        {skill:'TypeScript',function:goToSolidJS,icon:(<SiTypescript/>)},
        {skill:'ReactJS',function:goToSolidJS,icon:(<GrReactjs/>)},
        {skill:'Jest',function:goToSolidJS,icon:(<SiJest/>)},
        {skill:'NextJS',function:goToNextJS,icon:(<TbBrandNextjs/>)},
        {skill:'Context-api',function:goToReactJS,icon:(<GrReactjs/>)},
        {skill:'Styled-components',function:goToStyled,icon:(<SiStyledcomponents/>)},
        // {skill:'NodeJS',function:goToNodeJS,icon:(<IoLogoNodejs/>)},
        // {skill:'Express',function:goToNodeJS,icon:(<SiExpress/>)},
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

    function goToStyled(){
        Reactref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToDocker(){
        Dockerref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToDotnet(){
        Nextref?.current?.scrollIntoView({behavior:"smooth"})
    }

    function goToSolidJS(){
        Solidref?.current?.scrollIntoView({behavior:"smooth"})
    }

    return(
        <Container>
            <Wrapper>
                <div style={{minHeight:'100vh'}} ref={Topref}>
                    <Title title={'Skills'}/>
                    <Grid skills={skills}/>
                </div>     

                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Solidref}>
                    <Project.Root 
                            title={'Pokedex'}
                            description={`
                            NOTE: Under development! Project created for practice, addressing SOLID and Clean Architecture
                            `}
                    >
                        <Project.AreaStacks>
                            <SiTypescript/>
                            <GrReactjs/>
                            <SiJest/>
                        </Project.AreaStacks>
                        <Project.Thumb img={process.env.PUBLIC_URL+'/pokedex_thumb.png'} link="https://pokedexreyt.netlify.app/"/>
                        <Project.LinkRepo link={'https://github.com/reytler/pokedex'}/>
                    </Project.Root>
                </div>

                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Reactref}>
                    <Project.Root 
                            title={'Portfolio ReactJS'}
                            description={'Portfolio designed to demonstrate my programming skills.'}
                    >
                        <Project.AreaStacks>
                            <SiTypescript/>
                            <GrReactjs/>
                            <SiStyledcomponents/>
                        </Project.AreaStacks>

                        <Project.LinkRepo link={'https://github.com/reytler/portifolio'}/>

                    </Project.Root>
                </div>

                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Jestref}>
                    <Project.Root 
                            title={'Token Management'}
                            description={'The repository can be used as a sub-module for encoding and decoding tokens for the web.'}
                    >
                        <Project.AreaStacks>
                            <SiTypescript/>
                            <IoLogoNodejs/>
                            <SiJest/>
                        </Project.AreaStacks>

                        <Project.LinkRepo link={'https://github.com/reytler/Token'}/>

                    </Project.Root>
                </div>
                
                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Nextref}>
                    <Project.Root 
                            title={'Verzel cars'}
                            description={'Project developed for testing in a development company.'}
                    >
                        <Project.AreaStacks>
                            <SiTypescript/>
                            <DiDotnet/>
                            <TbBrandNextjs/>
                            <GrReactjs/>
                            <SiStyledcomponents/>
                            <SiDocker/>
                            <GiOctopus/>
                        </Project.AreaStacks>

                        <Project.LinkRepo link={'https://github.com/reytler/verzel'}/>
                    </Project.Root>
                </div>

                <div style={{height:'100vh',paddingTop:'30vh'}} ref={Dockerref}>
                    <Project.Root 
                        title={'Zabbix Docker'}
                        description={'Zabbix deployment complete with Docker-Compose'}
                    >
                        <Project.AreaStacks>
                            <SiDocker/>
                            <GiOctopus/>
                        </Project.AreaStacks>

                        <Project.LinkRepo link={'https://github.com/reytler/zabbix_docker'}/>
                    </Project.Root>
                </div>                 
                <Btntop backTotop={()=>{Topref?.current?.scrollIntoView({behavior:"smooth"})}}/>
            </Wrapper>
        </Container>
    )
}