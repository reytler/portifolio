import styled, { DefaultTheme } from "styled-components";

export const Wrapper = styled.div<{theme: DefaultTheme }>`
    img {
        width: 70px;
        border-radius: 50%;
        padding: 1px;
        margin: 5px;
        border: 3px solid ${({theme})=>theme.colors.borderPhoto};
        &:hover {
            border: 3px solid ${({theme})=>theme.colors.hover};
        }
    }
`;