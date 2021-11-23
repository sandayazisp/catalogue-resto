import FavoriteRestaurantIdb from '../../data/favoriterestaurant-db';
import { createEmpetyTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
        <h1 class="latest_label">Recomended Restaurant</h1>
        <div class="post"></div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('.post');
    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = createEmpetyTemplate();
    } else {
      restaurants.forEach((item) => {
        console.log(restaurants.length);
        restaurantContainer.innerHTML += createRestaurantItemTemplate(item);
      });
    }
  },
};

export default Favorite;
