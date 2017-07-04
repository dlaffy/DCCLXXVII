class LocationService {
  getPhonesLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const phonePosition = { latitude: position.coords.latitude, longitude: position.coords.longitude }
        console.log("LocationService#getPhonesLocation ", phonePosition);

        return phonePosition;
      },
      (error) => {
        console.log("GeoError: ", error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 100000 }
    );
  }
}

export default new LocationService();
