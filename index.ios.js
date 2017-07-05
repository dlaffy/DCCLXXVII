import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import locationReducers from './components/Location/reducers';
import App from './App';

import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

const store = createStore( combineReducers({location: locationReducers}), applyMiddleware(thunk));

export default class DCCLXXVII extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('DCCLXXVII', () => DCCLXXVII);
