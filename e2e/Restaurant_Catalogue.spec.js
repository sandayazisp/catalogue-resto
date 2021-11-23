/* eslint-disable no-undef */
const assert = require('assert');

Feature('Restaurant Catalogue');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.post');
  I.see('Tidak Ada Resto yang Di Sukai', '.post p');
});

Scenario('like one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.post-item_title a');

  const firstResto = locate('.post-item_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const likedRestoTitle = await I.grabTextFrom('.post-item_title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak Ada Resto yang Di Sukai', '.post p');

  I.amOnPage('/');

  I.seeElement('.post-item_title a');

  const firstResto = locate('.post-item_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestoTitle = await I.grabTextFrom('.post-item_title a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click(likedRestoTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post');
  const emptyFavResto = await I.grabTextFrom('.post');

  assert.strictEqual(emptyFavResto, 'Tidak Ada Resto yang Di Sukai');
});

Scenario('customer review', async ({ I }) => {
  I.see('Tidak Ada Resto yang Di Sukai', '.post p');

  I.amOnPage('/');

  I.seeElement('.post-item_title a');
  I.click(locate('.post-item_title a').first());

  I.seeElement('.review');
});
