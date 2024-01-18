import styled from "styled-components";

export const Warpper = styled.div`
    font-size:  12px;
    cursor: pointer;
    color:  ${({theme})=>theme.colors.linkColor};
    &:hover {
        color: ${({theme})=>theme.colors.linkColorHover};
    }
`;