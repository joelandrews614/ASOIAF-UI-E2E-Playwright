exports.HomePage = class HomePage{

    constructor(page){

        this.page = page;
        this.authorsPageLink = page.locator("//section/p/a[@href='https://joakimskoog.com/']");

    }

    async navToHomePage(){
        await this.page.goto("https://anapioficeandfire.com/");
    }

    async clickAuthorsPageLink(){
        await this.authorsPageLink.click();
    }

}