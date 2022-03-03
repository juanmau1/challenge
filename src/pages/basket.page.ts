import Page from './page';

class Basket extends Page {

    public get items() { return $$("[class='cart_item']") }
    public get removeItemOptions() { return $$("[class='product-remove']") }
    public get itemThumbnails() { return $$("[class='product-thumbnail']") }
    public get productName() { return $("[data-title='Product']") }
    public get productPrice() { return $("[data-title='Price']") }
    public get productQuantity() { return $("[data-title='Quantity']") }
    public get productTotal() { return $("[data-title='Total']") }
    public get couponCodeTextBox() { return $("[id='coupon_code']") }
    public get applyCouponButton() { return $("[name='apply_coupon']") }
    public get updateCartButton() { return $("[name='update_cart']") }
    public get cartTotals() { return $("[class*='cart_totals']") }
    public get subtotalTitle() { return $("[class*='cart-subtotal'] th") }
    public get subtotal() { return $("[data-title='Subtotal']") }
    public get roamingTaxTitle() { return $("[class*='roaming-tax'] th") }
    public get roamingTax() { return $("[data-title='Roaming Tax']") }
    public get orderTotalTitle() { return $("[class*='order-total'] th") }
    public get total() { return $("[data-title='Total']") }
    public get proceedToCheckoutButton() { return $("[class*='checkout-button']") }


    public async clickProceedToCheckout() {
        if (await this.proceedToCheckoutButton.isDisplayed()) {
            await this.proceedToCheckoutButton.click()
        } else {
            this.log(" Error - proceed To Checkout Button  not displayed ")
        }
    }

}

export default new Basket();
