import styled, { DefaultTheme } from "styled-components";

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

export const MenuMobile = styled.div<{theme: DefaultTheme,open: boolean }>`
    background-color: ${({theme})=>theme.colors.navbarBg};
    display: ${({open})=>open?'flex':'none'};
`;