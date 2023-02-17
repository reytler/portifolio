import { ThemeProvider } from 'styled-components';
// import {dark} from '../assets/styles/themes/default';
// import {light} from '../assets/styles/themes/light';
import {GlobalStyles} from '../assets/styles/global';
import Routesapp from '../Routes';
import { Navbar } from './Navbar';
import { useTheme } from '../contexts/ContextTheme';

function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Navbar/>
        <Routesapp/>
    </ThemeProvider>
  );
}

export default App;
