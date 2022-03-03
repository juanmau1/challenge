import Page from './page';

class Product extends Page {

    public get quantity() { return $("[name='quantity']") }
    public get addToBasket() { return $("[class^='single_add_to_cart_button']") }
    public get descriptionTab() { return $("[class^='description_tab']") }
    public get reviewsTab() { return $("[class^='reviews_tab']") }
    public get productTitle() { return $("[class^='product_title']") }
    public get price() { return $("[class*='Price-amount']") }
    public get viewBasket() { return $("[class*='button wc-forward']") }


    public async addQuantity(q) {
        if (await this.quantity.isDisplayed()) {
            await this.enterText(this.quantity, q)
        } else {
            this.log(" Error - product quantity input not displayed ")
        }
    }

    public async clickAddToCart() {
        if (await this.addToBasket.isDisplayed()) {
            await this.addToBasket.click()
        } else {
            this.log(" Error - product page quantity input not displayed ")
        }
    }
    public async clickViewBasket() {
        if (await this.viewBasket.isDisplayed()) {
            await this.viewBasket.click()
        } else {
            this.log(" Error - product page view Basket button not displayed ")
        }
    }

}

export default new Product();
