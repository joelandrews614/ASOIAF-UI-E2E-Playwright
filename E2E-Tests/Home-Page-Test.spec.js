const {test,expect} = require('@playwright/test');

import {HomePage} from "../Pages/Home-Page"; 


test.beforeEach(async({page}) => {

    const homePage = new HomePage(page);

    homePage.navToHomePage();

})

test("#1: Validate Home Page @sanity", async ({page}) => {

    await expect(page).toHaveTitle("An API of Ice And Fire");
    await expect(page).toHaveURL("https://anapioficeandfire.com/");

    await expect(page.locator("//h1")).toHaveText("An API of Ice And Fire");

})

test("#2: Validate Author's Website Link", async ({page}) => {

    const homePage = new HomePage(page);

    // Validations:
    await expect(page.locator("//section/p/a[@href='https://joakimskoog.com/']")).toBeVisible();

    homePage.clickAuthorsPageLink();

    await expect(page.locator("//h1[@id='joakim-skog-lundell']")).toHaveText("Joakim Skog Lundell");
})

test("#3: Validate the Sandox Section UI", async ({page}) => {

    // Validations:
    await expect(page.locator("//label[@for='url']")).toHaveText("https://anapioficeandfire.com/api/");

    await expect(page.locator("//input[@id='url']")).toBeVisible();

    await expect(page.locator("//button[@type='submit']")).toBeVisible();

    await expect(page.locator("//pre[@id='response-output']")).toBeVisible();
})

test("#4: Validate the Open Source Section UI", async ({page}) => {

    // Validations:
    await expect(page.locator("//a[@href='https://github.com/joakimskoog/AnApiOfIceAndFire']")).toBeVisible();
    
})

test("#5: Validate the Documentation Section UI", async ({page}) => {

    // Validations:
    await expect(page.locator("//a[@href='https://github.com/joakimskoog/AnApiOfIceAndFire/wiki']")).toBeVisible();
    
})
