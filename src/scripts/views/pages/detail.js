import UrlParser from '../../routes/url-parser';
import restaurantDb from '../../data/restaurantdb-source';
import restaurantDetail from '../templates/restaurant-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createLikeButtonTemplate } from '../templates/template-creator';

const DETAIL = {
  async render() {
    return `
    <section class="main">
      <h1 id="detail-restaurant">Detail Restaurant</h1>
      <div id="likeButtonContainer"></div>
  </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetailData = await restaurantDb.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('.main');
    restaurantContainer.innerHTML += restaurantDetail(restaurantDetailData);
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
    console.log(restaurantDetail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurantDetailData.id,
        name: restaurantDetailData.name,
        description: restaurantDetailData.description,
        pictureId: restaurantDetailData.pictureId,
        city: restaurantDetailData.city,
        rating: restaurantDetailData.rating,
      },
    });
  },
};

export default DETAIL;
