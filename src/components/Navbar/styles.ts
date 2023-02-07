import styled, { DefaultTheme, keyframes } from "styled-components";

export const Wrapper = styled.div<{theme: DefaultTheme }>`
    background-color: ${({theme})=>theme.colors.navbarBg};
    padding: 0vw 10vw 0vw 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
        width: 50vw;
        display: flex;
        justify-content: space-around;
    }

    .icon{
        transition: all .2s ease-in;
        cursor: pointer;
        text-decoration: none;
        color: ${({theme})=>theme.colors.primary};

        &:hover {
            color: ${({theme})=>theme.colors.hover};
        }

        &:active {
            color: ${({theme})=>theme.colors.active};
        }

        &:visited {
            color: ${({theme})=>theme.colors.primary};
        }
    }

    .items768px {
        @media (max-width: 425px) {
            display: none !important;
        }
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
        height: 0;
        display: none;
        visibility: hidden;
    }
    100% {
        opacity: 1;
        display: flex;
     }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
        display: flex;
    }
    100% {
        opacity: 0;
        height: 0;
        display: none;
        visibility: hidden;
     }
`;

export const MenuMobile = styled.div<{theme: DefaultTheme,open: boolean }>`
    background-color: ${({theme})=>theme.colors.navbarBg};
    animation: ${({open})=>open?fadeIn:fadeOut} 0.5s forwards;
    position: absolute;
    width: 100vw;

    @media (min-width: 768px) {
        display: none !important;
    }
`;