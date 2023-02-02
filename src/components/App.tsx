import { ThemeProvider } from 'styled-components';
import {dark} from '../assets/styles/themes/default';
import {light} from '../assets/styles/themes/light';
import {GlobalStyles} from '../assets/styles/global';
import { useState } from 'react';

function App() {

  const [theme,setTheme]=useState(dark)

  function toogleTheme(){
    setTheme(prev=>(prev === dark?light:dark))
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <h1>Teste</h1>
      <button
        onClick={()=>toogleTheme()}
      >Toogle Theme</button>
    </ThemeProvider>
  );
}

export default App;
