/* eslint-disable max-len */
/* eslint-disable no-undef */
/*
  Feature: Liking and Unliking A Restaurant

  Scenario: Liking and then unliking a Restaurant
  Description:
  - User navigates to the home page.
  - User waits for the restaurant list to be visible.
  - User selects the first restaurant from the list.
  - User likes the selected restaurant.
  - User navigates to the favorite page to verify the restaurant is liked.
  - User selects the liked restaurant from the favorite list.
  - User unlikes the selected restaurant.
  - User navigates back to the favorite page to verify the restaurant is unliked and no longer present in the favorite list.
*/

Feature('Liking and Unliking A Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking and then unliking a Restaurant', async ({ I }) => {
  I.wait(2);
  I.seeElement('.main .list #restaurant-list');

  I.click(locate('.card .title a').first());

  I.seeElement('[aria-label="like this Restaurant"]');
  I.click('[aria-label="like this Restaurant"]');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');

  I.click(locate('.list-item a').first());

  I.seeElement('[aria-label="unlike this Restaurant"]');
  I.click('[aria-label="unlike this Restaurant"]');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.list-item');
});
