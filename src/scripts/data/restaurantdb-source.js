import API_ENDPOINT from '../globals/api-endpoint';

class restaurantDb {
  static async restaurantHome() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    const { restaurants } = responseJson;
    return restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const { restaurant } = responseJson;
    return restaurant;
  }
}

export default restaurantDb;
