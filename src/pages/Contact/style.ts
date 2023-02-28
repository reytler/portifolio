import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20vh;

    #email{
        display: none;
    }

    @media (max-width: 584px) {
        flex-direction: column;
        gap: 40px;
        margin-top: 20vh;
    }
`;

export const Item = styled.div`
    font-size: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const Tooltip = styled.span<{visible: boolean}>`
    display: ${({visible})=>visible ? 'block' : 'none'};
    padding: 15px;
    z-index: 10;
    font-size: 14px;
    margin: 0 0 85px 75px;
    border-radius: 55px 55px 55px 0;
    position: absolute;
    background: rgba(13, 13, 13, 0.5);

    @media (max-width: 425px) {
        font-size: 12px;
    }
`;


