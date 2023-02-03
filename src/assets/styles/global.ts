import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from '../../types';
import Roboto from '../fonts/Roboto.ttf';
import Sora from '../fonts/Sora.ttf';
import Poppins from '../fonts/Poppins.ttf';
import Anton from '../fonts/Anton.ttf';

export const GlobalStyles =  createGlobalStyle<{theme: DefaultTheme }>`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto});
    }
    @font-face {
        font-family: 'Sora';
        src: url(${Sora});
    }
    @font-face {
        font-family: 'Poppins';
        src: url(${Poppins});
    }
    @font-face {
        font-family: 'Anton';
        src: url(${Anton});
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Sora', sans-serif; */
    }

    body {
        background: ${({theme}) => theme.colors.background};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;