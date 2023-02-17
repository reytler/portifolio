import { ThemeProvider } from 'styled-components';
import {GlobalStyles} from '../assets/styles/global';
import Routesapp from '../Routes';
import { Navbar } from './Navbar';
import { useTheme } from '../contexts/ContextTheme';
import Footer from './Footer';

function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Navbar/>
        <Routesapp/>
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
