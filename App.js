import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './src/index'
import {store} from './src/store';



class MainApp extends Component {
  render() {
    return(
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
export default MainApp