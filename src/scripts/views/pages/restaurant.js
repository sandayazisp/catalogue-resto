import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
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
    const restaurants = await RestaurantDbSource.restaurantDb();
    const restaurantContainer = document.querySelector('.post');
    restaurants.forEach((item) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(item);
    });
  },
};

export default Restaurant;
