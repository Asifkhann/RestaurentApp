/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import TabNavigator from './src/components/Home';
import {Provider} from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
};

export default App;
