import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import IndexScreen from './containers/IndexScreen';

export default class App extends Component {
  render(){
    return (
      <IndexScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
