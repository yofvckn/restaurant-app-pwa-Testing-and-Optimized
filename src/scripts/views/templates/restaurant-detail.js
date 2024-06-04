import CONFIG from '../../globals/config';

const restaurantDetail = (detail) => ` 
<div class="restaurant-detail" id="${detail.id}">
  <img src="${CONFIG.IMAGE_URL_LARGE}/${detail.pictureId}" alt="${detail.name}" crossorigin="anonymous">
    <h2 class="detail-title">"${detail.name}"</h2>
      <div id="detail-item">
        <p id="detail-alamat"><b>Alamat : </b>${detail.address}</p>
          <p id="detail-kota"><b>Kota : </b>${detail.city}</p>
          <p id="detail-deskripsi"><b>Deskripsi : </b>${detail.description}</p>
        <p id="detail-kategori"><b>Kategori : </b>${detail.categories.map((category) => category.name).join(', ')}</p>
      </div>
    <div class="menu-restaurant">
      <div class="makanan">
        <h3>Menu Makanan :</h3>
        <p> ${detail.menus.foods.map((food) => food.name).join(', ')}</p>
      </div>
        <div class="minuman">
          <h3>Menu Minuman :</h3>
          <p> ${detail.menus.drinks.map((drink) => drink.name).join(', ')}</p>
        </div>
      </div>
    <div class="ulasan-pelanggan">
      <h3 id="detail-ulasan">Ulasan Pelanggan :</h3>
        <div id="reviews-container">
${detail.customerReviews?.map((user) => (`
          <div class="item-review">
            <p><b>Nama : </b>${user.name}</p>
          <p><b>Ulasan : </b>${user.review}</p>
        <p><b>Tanggal : </b>${user.date}</p>
      </div>`)).join('')}
    </div>
  </div>
</div>
    `;

export default restaurantDetail;
