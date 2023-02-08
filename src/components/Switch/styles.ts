import styled from "styled-components";

export const Wrapped = styled.span<{right: boolean}>`
    .ball{
        width: 25px;
        height: 25px;
        border-radius: 10px;
        background-color: white;
    }

    .content{
        width: 50px;
        background-color: grey;
        padding: 0px 0px 0px 0px;
        border-radius: 50px;
        display: flex;
        flex-direction: row;
        justify-content: ${({right})=>right?'right':'left'};
    }
`;