import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './navigation/MainStackNavigator';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}
