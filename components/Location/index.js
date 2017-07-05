import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Location extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coordinates = { latitude: position.coords.latitude, longitude: position.coords.longitude }
        console.log("LocationService#getPhonesLocation ", coordinates);
        return coordinates;
      },
      (error) => {
        console.log("GeoError: ", error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 100000 }
    );
  }
  render() {
    const { location } = this.props;
    const Coordinates = () => <Text style={styles.gps}>{location.latitude}, {location.longitude}</Text>

    return (
      <View style={styles.container}>
        { location !== undefined ? <Coordinates /> : <ActivityIndicator /> }
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

const mapStateToProps = (state) => ({
  location: state.location.location
});

export default connect(mapStateToProps)(Location);
