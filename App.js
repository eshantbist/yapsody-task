import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import DrawerStack from './AppNavigator'

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
          <DrawerStack/>
      </Provider>
    );
  }
}
