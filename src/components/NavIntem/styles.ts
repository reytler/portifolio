import styled, { DefaultTheme } from "styled-components";

export const Wrapper = styled.div<{theme: DefaultTheme }>`
   padding: 0px 5px 0px 5px;
   font-weight: 100;
   font-size: 19px;
   color: ${({theme})=>theme.colors.primary};
   transition: all .2s ease-in;

   cursor: pointer;

   &:hover{
    color: ${({theme})=>theme.colors.hover};
   }

   &:active{
    color: ${({theme})=>theme.colors.active};
   }
`;