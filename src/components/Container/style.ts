import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

export const Wrapper = styled.div`
    width: 90vw;
    margin: 2vh 5vh 0 5vh;
    animation: ${fadeIn} 0.9s forwards;
    min-height: 100vh;

    @media (max-width: 425px) {
        margin: 2vh 5vh 0 2vh;
    }
`;