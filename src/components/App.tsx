import { ThemeProvider } from 'styled-components';
import {dark} from '../assets/styles/themes/default';
import {light} from '../assets/styles/themes/light';
import {GlobalStyles} from '../assets/styles/global';
import { useState } from 'react';
import Routesapp from '../Routes';
import { Navbar } from './Navbar';
import { FontSelector } from './fontSelector';
import { Fonts } from '../Contantes';

function App() {

  const [theme,setTheme]=useState(dark)
  const [font,setFont]=useState('Sora')

  function toogleTheme(){
    setTheme(prev=>(prev === dark?light:dark))
  }

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
        <button
          onClick={()=>toogleTheme()}
        >Toogle Theme</button>
        <Routesapp/>
      </FontSelector>
    </ThemeProvider>
  );
}

export default App;
