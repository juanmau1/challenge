Feature: Checkout

  Scenario Outline: As a user, I can perform the checkout

    Given I access the shop
    When I filter for a Certain Category <category>
    Then Open the Product Page
    Then Add a multiple quantities of the product to the cart
    Then Perform the checkout

    Examples:
      | category     |
      | "Javascript" |
      | "Powershell" |
