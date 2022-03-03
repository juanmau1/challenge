import Page from './page';
import report from "@wdio/allure-reporter"

class Checkout extends Page {

    public get firstName() { return $("[id='billing_first_name']") }
    public get lastName() { return $("[id='billing_last_name']") }
    public get companyName() { return $("[id='billing_company']") }
    public get email() { return $("[id='billing_email']") }
    public get phone() { return $("[id='billing_phone']") }
    public get country() { return $("[id='s2id_billing_country']") }
    public get searchCountry() { return $("[id='s2id_autogen1_search']") }
    public get address() { return $("[id='billing_address_1']") }
    public get address2() { return $("[id='billing_address_2']") }
    public get city() { return $("[id='billing_city']") }
    public get state() { return $("[id*='billing_state']") }
    public get searchState() { return $("[id*='select2-drop'] input") }
    public get zipCode() { return $("[id='billing_postcode']") }

    public get createAccountCheckbox() { return $("[id='createaccount']") }
    public get orderNotes() { return $("[id='order_comments']") }
    public get orderReview() { return $("[id='order_review']") }
    public get orderReviewTitle() { return $("[id='order_review_heading']") }

    public get productName() { return $("[class='cart_item'] [class='product-name']") }
    public get productQuantity() { return $("[class='cart_item'] [class='product-quantity']") }
    public get productTotal() { return $("[class='cart_item'] [class='product-total']") }
    public get productSubTotalTitle() { return $("[class='cart-subtotal'] th") }
    public get productSubTotal() { return $("[class='cart-subtotal'] td") }
    public get productRoamingTaxTitle() { return $("[class*='roaming-tax'] th") }
    public get productRoamingTax() { return $("[class*='roaming-tax'] td") }
    public get productOrderTotalTitle() { return $("[class*='order-total'] th") }
    public get productOrderTotal() { return $("[class*='order-total'] td") }
    public get directBankTransfer() { return $("[id='payment_method_bacs']") }
    public get checkPayment() { return $("[id='payment_method_cheque']") }
    public get cashPayment() { return $("[id='payment_method_cod']") }
    public get paypalExpressCheckout() { return $("[id='payment_method_ppec_paypal']") }
    public get placeOrderButton() { return $("[id='place_order']") }


    public async enterFirstName(f) {
        if (await this.firstName.isDisplayed()) {
            await this.enterText(this.firstName, f)
        } else {
            report.addDescription(" Error - firstName not displayed ", "text/plain")
        }
    }
    public async enterLastName(l) {
        if (await this.lastName.isDisplayed()) {
            await this.enterText(this.lastName, l)
        } else {
            this.log(" Error - lastName not displayed ")
        }
    }

    public async enterCompanyName(c) {
        if (await this.companyName.isDisplayed()) {
            await this.enterText(this.companyName, c)
        } else {
            this.log(" Error - companyName not displayed ")
        }
    }
    public async enterPhone(n) {
        if (await this.phone.isDisplayed()) {
            await this.enterText(this.phone, n)
        } else {
            this.log(" Error - phone not displayed ")
        }
    }
    public async enterEmail(e) {
        if (await this.email.isDisplayed()) {
            await this.enterText(this.email, e)
        } else {
            this.log(" Error - email not displayed ")
        }
    }

    public async enterCountry(c) {
        if (await this.country.isDisplayed()) {
            await this.country.click()
            if (await this.searchCountry.waitForDisplayed() == true) {
                await this.enterText(this.searchCountry, c)
                await this.pressEnter();
                await this.waitUntilCondition(await (await this.searchCountry).isDisplayedInViewport() == false, 10000, " Error - search country text box still displayed ")

            } else {
                this.log(" Error - searchCountry not displayed ")
            }
        } else {
            this.log(" Error - country not displayed ")
        }

    }
    public async enterAddress(a) {
        if (await this.address.isDisplayed()) {
            await this.enterText(this.address, a)
        } else {
            this.log(" Error - address not displayed ")
        }
    }
    public async enterAddress2(a) {
        if (await this.address2.isDisplayed()) {
            await this.enterText(this.address2, a)
        } else {
            this.log(" Error - address2 not displayed ")
        }
    }

    public async enterCity(c) {
        if (await this.city.waitForDisplayed() == true) {
            await this.city.scrollIntoView()
            await this.enterText(this.city, c)
        } else {
            this.log(" Error - city not displayed ")
        }
    }

    public async enterState(s) {
        if (await this.state.waitForDisplayed() == true) {
            await this.state.click()
            if (await this.searchState.isDisplayed() == true) {
                await this.enterText(this.searchState, s)
                await this.pressEnter()
            } else {
                this.log(" Error - search state not displayed ")
            }
        } else {
            this.log(" Error - state not displayed ")
        }
    }
    public async enterZipCode(z) {
        if (await this.zipCode.isDisplayed()) {
            await this.enterText(this.zipCode, z)
        } else {
            this.log(" Error - state not displayed ")
        }
    }

    public async selectDirectBankTransfer() {
        if (await this.directBankTransfer.isDisplayed()) {
            await this.directBankTransfer.click()
        } else {
            this.log(" Error - direct Bank Transfer not displayed ")
        }
    }
    public async selectCheckPayment() {
        if (await this.checkPayment.isDisplayed()) {
            await this.checkPayment.scrollIntoView()
            await this.checkPayment.click()
        } else {
            this.log(" Error - check Payment not displayed ")
        }
    }
    public async selectCashPayment() {
        if (await this.cashPayment.isDisplayed()) {
            await this.cashPayment.scrollIntoView()
            await this.cashPayment.click()
        } else {
            this.log(" Error - cash Payment not displayed ")
        }
    }
    public async selectPaypalExpressCheckout() {
        if (await this.paypalExpressCheckout.isDisplayed()) {
            await this.paypalExpressCheckout.scrollIntoView()
            await this.paypalExpressCheckout.click()
        } else {
            this.log(" Error - paypal Express Checkout not displayed ")
        }
    }

    public async clickPlaceOrder() {
        if (await this.placeOrderButton.isDisplayed()) {
            await this.placeOrderButton.scrollIntoView()
            await this.placeOrderButton.click()
        } else {
            this.log(" Error - place order button not displayed ")
        }
    }

}

export default new Checkout();
