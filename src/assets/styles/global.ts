import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from '../../types';

export const GlobalStyles =  createGlobalStyle<{theme: DefaultTheme }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body {
        background: ${({theme}) => theme.colors.background};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;