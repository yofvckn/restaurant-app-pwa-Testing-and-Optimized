import FavoriteRestaurantIdb from '../../data/favorite-idb';
import CONFIG from '../../globals/config';

const FAVORITE = {
  async render() {
    return `
  <section class="main">
      <div class="list">
        <h1 class="favorite-restaurant">Favorite Restaurant</h1>
        <div class="row" id="restaurant-list"></div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const dataList = restaurant.map((data) => `
        <div class="list-item">
            <img class="img" src="${CONFIG.IMAGE_URL_SMALL + data.pictureId}" alt="${data.name}" title="${data.name}" crossorigin="anonymous">
            <div class="city">Kota ${data.city}</div>
            <div class="card">
                <b class="rating">Rating : ${data.rating}</b>
                <h3 class="title"><a href="/#/detail/${data.id}">${data.name}</a></h3>
                <div class="desc">${data.description}</div>
            </div>
        </div>
    `).join('');
    console.log(restaurant);
    const favoriteRestaurantContainer = document.querySelector('#restaurant-list');
    favoriteRestaurantContainer.innerHTML = dataList;
  },
};

export default FAVORITE;
