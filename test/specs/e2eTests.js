const loginPage = require("../pageobjects/login.page.js");
const inventoryPage = require("../pageobjects/inventory.page.js");
const cartPage = require("../pageobjects/cart.page.js");
const checkoutPage = require("../pageobjects/checkout.page.js");

describe("e2e tests", () => {
  beforeEach("Open browser", () =>{
    browser.reloadSession();
		loginPage.open();
		browser.pause(1000);
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
	})

  describe("adding items to cart and finish the buy", () => {
    it("should be: succesfull buy", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue("dario");
      checkoutPage.lastName.setValue("nuñez");
      checkoutPage.postalCode.setValue("2000");
      checkoutPage.continueButton.click();
      checkoutPage.finishButton.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
    })

    it("should be: succesfull buy", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue(['a']);
      checkoutPage.lastName.setValue(['b']);
      checkoutPage.postalCode.setValue(['c']);
      checkoutPage.continueButton.click();
      checkoutPage.finishButton.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
    })

    it("should be: succesfull buy", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue(true);
      checkoutPage.lastName.setValue(false);
      checkoutPage.postalCode.setValue(true);
      checkoutPage.continueButton.click();
      checkoutPage.finishButton.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
    })

    it("should be: succesfull buy", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue(123);
      checkoutPage.lastName.setValue(456);
      checkoutPage.postalCode.setValue(789);
      checkoutPage.continueButton.click();
      checkoutPage.finishButton.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
    })

    it("should be: succesfull buy & back to home", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue(123);
      checkoutPage.lastName.setValue(456);
      checkoutPage.postalCode.setValue(789);
      checkoutPage.continueButton.click();
      checkoutPage.finishButton.click();
      checkoutPage.backHome.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    })

    it("should be: succesfull buy & logout", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue(123);
      checkoutPage.lastName.setValue(456);
      checkoutPage.postalCode.setValue(789);
      checkoutPage.continueButton.click();
      checkoutPage.finishButton.click();
      inventoryPage.burguerButton.click();
      inventoryPage.burguerButtonLogout.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/");
    })

     it("should be: succesfull buy & total container shown", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem4.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue("dario");
      checkoutPage.lastName.setValue("nunez");
      checkoutPage.postalCode.setValue("2000");
      checkoutPage.continueButton.click();
      expect(checkoutPage.totalContainer).toHaveTextContaining("Total: $43.18");
    })
  })

  describe("Not passing from checkout 1", () => {
    it("should be: empty data entered", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue("");
      checkoutPage.continueButton.click();
      expect(checkoutPage.error).toHaveTextContaining("Error: First Name is required");
    })

    it("should be: empty data entered", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue("dario");
      checkoutPage.lastName.setValue();
      checkoutPage.continueButton.click();
      expect(checkoutPage.error).toHaveTextContaining("Error: Last Name is required");
    })

    it("should be: empty data entered", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.checkoutButton.click();
      checkoutPage.firstName.setValue("dario");
      checkoutPage.lastName.setValue("nunez");
      checkoutPage.postalCode.setValue();
      checkoutPage.continueButton.click();
      expect(checkoutPage.error).toHaveTextContaining("Error: Postal Code is required");
    })
  })
})

