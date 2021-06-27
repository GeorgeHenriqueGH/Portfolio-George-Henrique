import React from 'react';

import Routes from './Routes';
import GlobalStyles from './globalStyles';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
