import styled from "styled-components";

export const Icon = styled.a`

    .icon{
        transition: all .2s ease-in;
        cursor: pointer;
        text-decoration: none;
        color: ${({theme})=>theme.colors.primary};
    
        &:active {
            color: ${({theme})=>theme.colors.active};
        }
    
        &:visited {
            color: ${({theme})=>theme.colors.primary};
        }

        font-size: 40px;

        @media (max-width: 1440px) {
            font-size: 25px;
        }

        @media (max-width: 1300px) {
            font-size: 20px;
        }

    }
`;

export const Wrapper = styled.span`

    @media (max-width: 1440px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: relative;
        width: 440px !important;
    }

    @media (max-width: 1300px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: relative;
        width: 300px !important;
    }

    @media (max-width: 425px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`;
