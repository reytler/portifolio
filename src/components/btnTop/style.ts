import styled from "styled-components";

export const Span = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    background: ${({theme})=>theme.colors.navbarBg};
    text-decoration: none;
    cursor: pointer;
    border-radius: 50px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    &:active{
        text-decoration: none;
    }
`;