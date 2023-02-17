import styled from "styled-components";

export const Img = styled.img`
    width: 540px;
    border-radius: 5px;
    margin-top: 65px;

    @media (max-width: 1440px) {
        width: 400px;
        margin-top: 55px;
    }

    @media (max-width: 1024px) {
        width: 340px;
        height: 474px;
        margin-top: 57px;
    }

    @media (max-width: 768px) {
        width: 200px;
        height: 274px;
    }

    @media (max-width: 425px) {
        width: 100px;
        height: 100px;
        margin: 15px 0 15px 0;
        border-radius: 30px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 425px) {
        justify-content: space-around;

        .monitor{
            display: none;
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
    }

    @media (min-width: 768px) {
        .mobile{
            display: none;
        }
    }
`;