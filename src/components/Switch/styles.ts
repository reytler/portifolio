import styled from "styled-components";

export const Wrapped = styled.span<{right: boolean}>`
    .ball{
        width: 25px;
        height: 25px;
        border-radius: 25px;
        background-color: ${({right})=>right?'#282c34':'#eef2fa'};
    }

    .content{
        cursor: pointer;
        width: 50px;
        background-color: ${({right})=>right?'#eef2fa':'#282c34'};
        padding: 0px 0px 0px 0px;
        border-radius: 50px;
        display: flex;
        flex-direction: row;
        justify-content: ${({right})=>right?'right':'left'};
        transition: all .5s ease-in;
    }
`;