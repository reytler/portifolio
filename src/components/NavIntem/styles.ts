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

   @media (max-width: 425px){
     text-align: center;
     font-size: 26px;
     line-height: 38px;
     border-bottom: 1px solid ${({theme})=>theme.colors.opaco};
     margin-bottom: 10px;
   }

   @media (min-width: 768px){
        font-size: 14px;
   }

   @media (min-width: 1440px){
        font-size: 22px;
   }

   @media (min-width: 2560px){
        font-size: 40px;
   }
`;