import Page from './page';

class Catalog extends Page {

    public get searchForm() { return $("[id='searchform']") }

    public get searchTextBox() { return $("[title='Search']") }

    public get menuOptions() { return $$("[id='main-nav']") }

    public get resultItems() { return $$("[id^='post']") }

    public open() {
        return super.open();
    }
    public async search(criteria) {
        await this.searchForm.waitForDisplayed()

        if (await this.searchForm.isDisplayed()) {
            await this.searchForm.moveTo()
            this.log(" Info - click on search button ")
            if (await this.searchTextBox.isDisplayed()) {
                this.log(" Info - search text box displayed ")
                await this.enterText(this.searchTextBox, criteria)
                await this.pressEnter()
                this.log(" Info - search criteria entered = " + criteria)
            } else {
                this.log(" Error - search textbox not displayed ")
                this.takeScreenshot()
            }

        } else {
            this.log(" Error - search icon not displayed ")
            this.takeScreenshot()
        }
    }
    public async clickFirstResultItem() {
        if (await this.resultItems.length > 0) {
            let tt = await this.resultItems[0].getText()
            await this.resultItems[0].click()
            this.log(" Info - item result clicked = " + tt)
        } else {
            this.log(" Error - no result items listed ")
            this.takeScreenshot()
        }
    }
}

export default new Catalog();
