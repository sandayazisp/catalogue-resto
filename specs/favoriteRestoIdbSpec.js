/* eslint-disable no-undef */
const { default: FavoriteRestaurantIdb } = require('../src/scripts/data/favoriterestaurant-db');
const { itActsAsFavoriteRestoModel } = require('./contract/favoriteRestoContract');

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (movie) => {
      await FavoriteRestaurantIdb.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
