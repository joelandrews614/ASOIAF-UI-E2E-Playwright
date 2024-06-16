const {test,expect} = require('@playwright/test');

test("Home Page Validation", async ({page}) => {

    await page.goto("https://anapioficeandfire.com/");

    await expect(page).toHaveTitle("An API of Ice And Fire");

    await expect(page).toHaveURL("https://anapioficeandfire.com/");
})

test("Validate Author's Website Link", async ({page}) => {

    await page.goto("https://anapioficeandfire.com/");
    
    await page.locator("//section/p/a[@href='https://joakimskoog.com/']").click();

    await page.locator("//a[@href='/']").click();

})