import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class LocationComponent extends Component {
  componentDidMount() {
    console.log("LocationComponent#componentDidMount ", this.props.location);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.gps}>{this.props.location.latitude}, {this.props.location.longitude}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gps: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    width: 300,
    height: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
