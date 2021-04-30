import React from 'react';
import type {Node} from 'react';

import {Provider} from 'react-redux';
import store from './store';
import Navigation from './src/navigation';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
