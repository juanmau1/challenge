import Page from './page';

class Order extends Page {

    public get orderDetails() { return $("[class='shop_table order_details']") }
    public get orderItems() { return $$("[class='order_item']") }
    public get productTotals() { return $$("[class='order_item'] [class='product-total'] ") }
    public get productNames() { return $$("[class='order_item'] [class='product-name']") }

}

export default new Order();
