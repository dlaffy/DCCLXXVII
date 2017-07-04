import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as locationActions from '../store/location/actions';
import * as locationSelectors from '../store/location/reducer';
import LocationComponent from '../components/location';

class IndexScreen extends Component {
  componentWillMount() {
    this.props.dispatch( locationActions.findLocation() );
  }

  render () {
    if (!this.props.location) return this.renderLoading();

    return (
      <LocationComponent location={ this.props.location } />
    );
  }

  renderLoading() {
    return (
      <ActivityIndicator />
    )
  }
}

function mapStateToProps( state ) {
  return {
    location: locationSelectors.getLocation(state)
  };
}

export default connect(mapStateToProps)(IndexScreen);
