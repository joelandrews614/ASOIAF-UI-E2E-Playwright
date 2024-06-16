const {test,expect} = require('@playwright/test');

test('Home Page Validation', async ({page}) => {

    await page.goto("https://anapioficeandfire.com/");

    await expect(page).toHaveTitle("An API of Ice And Fire");

})