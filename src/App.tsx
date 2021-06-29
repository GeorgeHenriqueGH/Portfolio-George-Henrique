import React from 'react';
import ThemeProvider  from 'styled-components'

import Routes from './Routes';
import GlobalStyles from './styles/globalStyles';
import gruvbox from './styles/themes/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={gruvbox}>
      <div className="App">
        <Routes/>
        <GlobalStyles/>
      </div>
    </ThemeProvider>
  );
}

export default App;
