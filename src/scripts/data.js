import('../public/data/DATA.json').then(({ default: jsonData }) => {
  console.log(jsonData);
  const dataRestaurant = jsonData.restaurants;
  let listRestaurant = '';
  dataRestaurant.forEach((data) => {
    listRestaurant += `
      <div class="list-item">
        <img class="img" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
          <div class="city">Kota ${data.city}</div>
            <div class="card">
              <b class="rating">Rating : ${data.rating}</b>
            <h3 class="title">${data.name}</h3>
          <div class="desc">${data.description}</div>
        </div>
      </div>
      `;
  });
  document.querySelector('#restaurant-list').innerHTML = listRestaurant;
});
