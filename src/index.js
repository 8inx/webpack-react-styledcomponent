import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme} from './style';

import App from './App'


const Main = () =>
  <ThemeProvider theme={Theme}>
    <GlobalStyle/>
      <App /> 
  </ThemeProvider>
  

render( <Main/>, document.getElementById('root'));