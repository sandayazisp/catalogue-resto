import RestaurantDbSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import {
  createCommentRestaurantTemplate,
  createDrinksItem,
  createFoodsItem,
  createRestauranDetailTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <section class="content">
          <div class="latest">
              <h1 class="latest_label">Detail Restaurant</h1>
              <div id="restaurant" tabindex="0" class="restaurant">  
              </div>
              <div id="likeButtonContainer"></div>              
          </div>
          </section>
          `;
  },

  async afterRender() {
    // fungsi ini dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestauranDetailTemplate(restaurant);

    const commentContainer = document.querySelector('#comment');
    restaurant.customerReviews.forEach((review) => {
      commentContainer.innerHTML += createCommentRestaurantTemplate(review);
    });

    const foodsContainer = document.querySelector('#foods');
    restaurant.menus.foods.forEach((food) => {
      foodsContainer.innerHTML += createFoodsItem(food);
    });

    const drinksContainer = document.querySelector('#drinks');
    restaurant.menus.drinks.forEach((drink) => {
      drinksContainer.innerHTML += createDrinksItem(drink);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#restaurant').focus();
    });
  },
};

export default Detail;
