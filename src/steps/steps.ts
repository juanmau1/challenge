import { Given, When, Then } from '@wdio/cucumber-framework';

import catalog from '../pages/catalog.page';
import product from "../pages/product.page";
import basket from "../pages/basket.page";
import checkout from "../pages/checkout.page";
import order from "../pages/order.page";

Given(/^I access the shop$/, async () => {
    await catalog.open()
});

When(/^I filter for a Certain Category (.+)$/, async (category) => {
    await catalog.search(category)
});

Then(/^Open the Product Page$/, async () => {
    await expect(catalog.resultItems).toBeExisting()
    await catalog.clickFirstResultItem();
});

Then(/^Add a multiple quantities of the product to the cart$/, async () => {
    await expect(product.quantity).toBeExisting()
    await expect(product.productTitle).toBeExisting()
    await expect(product.addToBasket).toBeExisting()
    await expect(product.descriptionTab).toBeExisting()
    await expect(product.reviewsTab).toBeExisting()
    await expect(product.price).toBeExisting()
    await product.addQuantity(4)
    await product.clickAddToCart();
    await expect(product.viewBasket).toBeExisting()
});
Then(/^Perform the checkout$/, async () => {
    await product.clickViewBasket()

    await expect(basket.items).toBeExisting()
    await expect(basket.removeItemOptions).toBeExisting()
    await expect(basket.itemThumbnails).toBeExisting()
    await expect(basket.productName).toBeExisting()
    await expect(basket.productPrice).toBeExisting()
    await expect(basket.productQuantity).toBeExisting()
    await expect(basket.productTotal).toBeExisting()
    await expect(basket.couponCodeTextBox).toBeExisting()
    await expect(basket.applyCouponButton).toBeExisting()
    await expect(basket.updateCartButton).toBeExisting()
    await expect(basket.cartTotals).toBeExisting()
    await expect(basket.subtotalTitle).toBeExisting()
    await expect(basket.subtotal).toBeExisting()
    await expect(basket.roamingTaxTitle).toBeExisting()
    await expect(basket.roamingTax).toBeExisting()
    await expect(basket.orderTotalTitle).toBeExisting()
    await expect(basket.roamingTax).toBeExisting()
    await expect(basket.total).toBeExisting()
    await expect(basket.proceedToCheckoutButton).toBeExisting()

    await basket.clickProceedToCheckout();

    await expect(checkout.firstName).toBeExisting()
    await expect(checkout.lastName).toBeExisting()
    await expect(checkout.companyName).toBeExisting()
    await expect(checkout.email).toBeExisting()
    await expect(checkout.phone).toBeExisting()
    await expect(checkout.country).toBeExisting()
    await expect(checkout.address).toBeExisting()
    await expect(checkout.address2).toBeExisting()
    await expect(checkout.city).toBeExisting()
    await expect(checkout.state).toBeExisting()
    await expect(checkout.createAccountCheckbox).toBeExisting()
    await expect(checkout.orderReview).toBeExisting()
    await expect(checkout.orderReviewTitle).toBeExisting()
    await expect(checkout.firstName).toBeExisting()
    await expect(checkout.productName).toBeExisting()
    await expect(checkout.productQuantity).toBeExisting()
    await expect(checkout.productTotal).toBeExisting()
    await expect(checkout.productSubTotalTitle).toBeExisting()
    await expect(checkout.productSubTotal).toBeExisting()
    await expect(checkout.productRoamingTaxTitle).toBeExisting()
    await expect(checkout.productRoamingTax).toBeExisting()
    await expect(checkout.productOrderTotalTitle).toBeExisting()
    await expect(checkout.directBankTransfer).toBeExisting()
    await expect(checkout.checkPayment).toBeExisting()
    await expect(checkout.cashPayment).toBeExisting()
    await expect(checkout.paypalExpressCheckout).toBeExisting()
    await expect(checkout.orderReviewTitle).toBeExisting()
    await expect(checkout.placeOrderButton).toBeExisting()

    await checkout.enterFirstName("Adam Test")
    await checkout.enterLastName("Smith Test")
    await checkout.enterCompanyName("Test Company")
    await checkout.enterEmail("test@email.com")
    await checkout.enterPhone("9876543210")
    await checkout.enterCountry("United States (US)")
    await checkout.enterAddress("166 - 05 Rockaway Blvd")
    await checkout.enterCity("New York")
    await checkout.enterState("New York")
    await checkout.enterZipCode("11434")

    await checkout.clickPlaceOrder()

    await expect(order.orderDetails).toBePresent()
    await expect(order.orderItems).toBePresent()
    await expect(order.productNames).toBePresent()
    await expect(order.productTotals).toBePresent()
});
1

