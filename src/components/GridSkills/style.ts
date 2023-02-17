import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 7px
`;

export const Item = styled.span`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background: ${({theme})=>theme.colors.navbarBg};
    height: 100px;
    width: 200px;
    padding: 5px;

    i{
        font-size: 30px;
    }

    @media (max-width: 425px) {
        height: 50px;
        width: 100px;
        font-size: 8px;
        i{
            font-size: 15px;
        }
    }

    &:hover{
        background-color: ${({theme})=>theme.colors.hover};
    }
`;