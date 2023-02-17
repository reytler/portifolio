import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from '../../types';
import Sora from '../fonts/Sora.ttf';

export const GlobalStyles =  createGlobalStyle<{theme: DefaultTheme }>`
    @font-face {
        font-family: 'Sora';
        src: url(${Sora});
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body {
        transition: all .2s ease-in;
        background: ${({theme}) => theme.colors.background};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;