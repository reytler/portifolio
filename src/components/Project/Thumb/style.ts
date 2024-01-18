import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 15px 0 15px 0;
    cursor: pointer;
    img{
        width: 418px;
        height: 304px;
        @media (max-width: 425px) {
            width: 393px;
            height: 276px;
        }

        @media (max-width: 375px) {
            width: 347px;
            height: 230px;
        }
        
        @media (max-width: 320px) {
            width: 296px;
            height: 230px;
        }
    }
`;