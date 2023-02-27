import styled from "styled-components";

export const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background: ${({theme})=>theme.colors.navbarBg};
    padding: 8px;

    &:hover{
        background-color: ${({theme})=>theme.colors.hover};
    }
`;

export const Description = styled.p`
    letter-spacing: 1px;
    word-spacing: 2px;
    text-align: justify;
    font-size: 14px;
    line-height: 20px;
`;