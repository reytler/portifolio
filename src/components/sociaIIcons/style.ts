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
    }
`;

export const Wrapper = styled.span`
    @media (max-width: 425px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`;
