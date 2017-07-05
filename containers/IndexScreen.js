import React, { Component } from 'react';
import { connect } from 'react-redux';

import Location from '../components/location';

class IndexScreen extends Component {
  render () {
    const hardCodedValues = {
      latitude: 37.785834,
      longitude: -122.406417
    }

    return (
      <Location  />
    );
  }
}

export default IndexScreen;
