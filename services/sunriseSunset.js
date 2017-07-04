// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service

import _ from 'lodash';
import Moment from 'moment';

const SUNRISE_SUNSET_ENDPOINT = 'https://api.sunrise-sunset.org';

export default class SunriseSunsetService {

  async getInfoForADateAndLocation(date, location) {
    const apiDate = Moment( date ).format( "YYYY-MM-DD" );
    const url = `${SUNRISE_SUNSET_ENDPOINT}/json?lat=${location.latitude}&lng=${location.longitude}&formatted=0&date=${apiDate}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Sunrise-Sunset getInfoForADateAndLocation failed, HTTP status ${response.status}`);
    }

    const data = await response.json();

    return {
      sunriseSunset: { sunrise: _.get(data, 'results.sunrise'),
                       sunset: _.get(data, 'results.sunset'),
                       dayLength: _.get(data, 'results.day_length') }
    }
  }

}

//export default new RedditService();
