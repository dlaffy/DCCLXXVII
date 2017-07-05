import React, { Component } from 'react';
import Location from '../components/location';

class IndexScreen extends Component {
  render () {
    const hardCodedValues = {
      latitude: 37.785834,
      longitude: -122.406417
    }

    return (
      <Location location={ hardCodedValues } />
    );
  }
}

export default IndexScreen;
