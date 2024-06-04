import restaurantDb from '../../data/restaurantdb-source';
import CONFIG from '../../globals/config';
import { indikatorLoading } from '../templates/template-creator';

const HOME = {
  async render() {
    return `
    <!-- Jumbotron -->
    <div class="hero">
    <picture>
        <source media="(max-width: 600px)" srcset="images/heros/hero-image_1-small.jpg" alt="hero image small">
        <img src='images/heros/hero-image_1-large.jpg' alt="hero image large"/>
      </picture>
      <section class="section" id="home">
        <h1 class="logo">Restaurant <span>Apps</span></h1>
      </section>
    </div>
      
    <section class="main">
      <div class="list">
        <div id="indikator-loading" class="indikator-loading"></div>
        <h1>Explore Restaurant</h1>
        <div class="row" id="restaurant-list"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    this.renderLoading();
    setTimeout(async () => {
      try {
        const resto = await restaurantDb.restaurantHome();
        console.log(resto);
        const dataList = resto.map((data) => `
          <div class="list-item">
              <img class="img lazyload" data-src="${CONFIG.IMAGE_URL_SMALL + data.pictureId}" alt="${data.name}" title="${data.name}" crossorigin="anonymous">
              <div class="city">Kota ${data.city}</div>
              <div class="card">
                  <b class="rating">Rating : ${data.rating}</b>
                  <h3 class="title"><a href="/#/detail/${data.id}">${data.name}</a></h3>
                  <div class="desc">${data.description}</div>
              </div>
          </div>
        `).join('');

        document.querySelector('#restaurant-list').innerHTML = dataList;
        this.hideLoading();
      } catch (error) {
        this.renderError(error.message);
      }
    }, 1500);
  },

  renderLoading() {
    const loadingIndicator = document.querySelector('#indikator-loading');
    if (loadingIndicator) {
      loadingIndicator.innerHTML = indikatorLoading();
      loadingIndicator.style.display = 'block';
    }
  },

  hideLoading() {
    const loadingIndicator = document.querySelector('#indikator-loading');
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
  },

  renderError(message) {
    alert(`Error: ${message}`);
    const loadingIndicator = document.querySelector('#indikator-loading');
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
    const restaurantListContainer = document.querySelector('#restaurant-list');
    if (restaurantListContainer) {
      restaurantListContainer.innerHTML = `<p class="error-message">${message}</p>`;
    }
  },
};

export default HOME;
