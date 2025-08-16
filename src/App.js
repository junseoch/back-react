import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import Jsx05 from './docs/step/Jsx05';
import ContainerPracitce from './docs/props/ContainerPracitce';
import ComponentPractice03 from './docs/props/ComponentPractice03';
import CountPractice from './docs/state/CountPractice';
import PracticeFoodContainer from './docs/map/basic/PracticeFoodContainer';
import AdContainer from './docs/map/basic/AdContainer';

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}/>
      </ThemeProvider> */}

      <AdContainer/>

    </>
  );
}

export default App;
