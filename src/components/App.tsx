import { ThemeProvider } from 'styled-components';
import {dark} from '../assets/styles/themes/default';
import {light} from '../assets/styles/themes/light';
import {GlobalStyles} from '../assets/styles/global';
import { useState } from 'react';
import Routesapp from '../Routes';
import { Navbar } from './Navbar';
import { FontSelector } from './fontSelector';
import { Fonts } from '../Contantes';
import { useTheme } from '../contexts/ContextTheme';

function App() {

  const [font,setFont]=useState('Sora')

  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <FontSelector font={font}>
        <Navbar/>
        <select onChange={e=>setFont(e.target.value)}>
          {Fonts.map((font, index)=>(
            <option key={index} value={font}>{font}</option>
          ))}
        </select>
        <Routesapp/>
      </FontSelector>
    </ThemeProvider>
  );
}

export default App;
