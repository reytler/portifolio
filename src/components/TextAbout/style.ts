import styled from "styled-components";

export const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    letter-spacing: 1px;
    word-spacing: 2px;
    text-align: justify;
    font-size: 14px;
    line-height: 20px;
    p{ margin-bottom: 15px };

    @media (min-width: 768px) {
        width: 50vw;
    }
`;