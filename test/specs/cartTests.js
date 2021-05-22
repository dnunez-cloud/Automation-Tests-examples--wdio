const loginPage = require("../pageobjects/login.page.js");
const inventoryPage = require("../pageobjects/inventory.page.js");
const cartPage = require("../pageobjects/cart.page.js");

describe("inventory tests", () => {
  beforeEach("Open browser", () =>{
    browser.reloadSession();
		loginPage.open();
		browser.pause(1000);
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
	})

  describe("adding items to cart and checking in cart page", () => {
    it("should be: add item and checkout", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.cartButton.click();
      expect(cartPage.cartItem0Href).toHaveTextContaining("Sauce Labs Bike Light");
    })

    it("should be: add item and checkout", () => {
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      expect(cartPage.cartItem1Href).toHaveTextContaining("Sauce Labs Bolt T-Shirt");
    })

    it("should be: add item and checkout", () => {
      inventoryPage.addToCartItem2.click();
      inventoryPage.cartButton.click();
      expect(cartPage.cartItem2Href).toHaveTextContaining("Sauce Labs Onesie");
    })

    it("should be: add item and checkout", () => {
      inventoryPage.addToCartItem3.click();
      inventoryPage.cartButton.click();
      expect(cartPage.cartItem3Href).toHaveTextContaining("Test.allTheThings() T-Shirt (Red)");
    })

    it("should be: add item and checkout", () => {
      inventoryPage.addToCartItem4.click();
      inventoryPage.cartButton.click();
      expect(cartPage.cartItem4Href).toHaveTextContaining("Sauce Labs Backpack");
    })

    it("should be: add item and checkout", () => {
      inventoryPage.addToCartItem5.click();
      inventoryPage.cartButton.click();
      expect(cartPage.cartItem5Href).toHaveTextContaining("Sauce Labs Fleece Jacket");
    })

    it("should be: add item and checkout", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.addToCartItem2.click();
      inventoryPage.addToCartItem3.click();
      inventoryPage.addToCartItem4.click();
      inventoryPage.addToCartItem5.click();
      inventoryPage.cartButton.click();
      expect(cartPage.cartItem0Href).toHaveTextContaining("Sauce Labs Bike Light");
      expect(cartPage.cartItem1Href).toHaveTextContaining("Sauce Labs Bolt T-Shirt");
      expect(cartPage.cartItem2Href).toHaveTextContaining("Sauce Labs Onesie");
      expect(cartPage.cartItem3Href).toHaveTextContaining("Test.allTheThings() T-Shirt (Red)");
      expect(cartPage.cartItem4Href).toHaveTextContaining("Sauce Labs Backpack");
      expect(cartPage.cartItem5Href).toHaveTextContaining("Sauce Labs Fleece Jacket");
    })
  })

  it("should be: enter into checkout page", () =>{
    inventoryPage.cartButton.click();
    cartPage.checkoutButton.click();
    expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
  })

  it("should be: back to inventory page", () =>{
    inventoryPage.cartButton.click();
    cartPage.continueShoppingButton.click();
    expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  })

   it("should be: add items back to shopping add more and checkout", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.addToCartItem2.click();
      inventoryPage.cartButton.click();
      cartPage.removeItem0.click();
      cartPage.removeItem2.click();
      cartPage.continueShoppingButton.click();
      inventoryPage.addToCartItem4.click();
      inventoryPage.addToCartItem5.click();
      expect(cartPage.cartItem0Href.disabled==true);
      expect(cartPage.cartItem1Href).toHaveTextContaining("Sauce Labs Bolt T-Shirt");
      expect(cartPage.cartItem2Href.disabled==true);
      expect(cartPage.cartItem3Href.disabled==true);
      expect(cartPage.cartItem4Href).toHaveTextContaining("Sauce Labs Backpack");
      expect(cartPage.cartItem5Href).toHaveTextContaining("Sauce Labs Fleece Jacket");
    })
  
  describe ("removing items from cart", ()=> {
    it("should be: removing item and checkout", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.cartButton.click();
      cartPage.removeItem0.click();
      expect(cartPage.cartItem0Href.disabled==true);
    })

    it("should be: removing item and checkout", () => {
      inventoryPage.addToCartItem1.click();
      inventoryPage.cartButton.click();
      cartPage.removeItem1.click();
      expect(cartPage.cartItem1Href.disabled==true);
    })

    it("should be: removing item and checkout", () => {
      inventoryPage.addToCartItem2.click();
      inventoryPage.cartButton.click();
      cartPage.removeItem2.click();
      expect(cartPage.cartItem2Href.disabled==true);
    })

     it("should be: removing item and checkout", () => {
      inventoryPage.addToCartItem3.click();
      inventoryPage.cartButton.click();
      cartPage.removeItem3.click();
      expect(cartPage.cartItem3Href.disabled==true);
    })

    it("should be: removing item and checkout", () => {
      inventoryPage.addToCartItem4.click();
      inventoryPage.cartButton.click();
      cartPage.removeItem4.click();
      expect(cartPage.cartItem4Href.disabled==true);
    })

    it("should be: removing item and checkout", () => {
      inventoryPage.addToCartItem5.click();
      inventoryPage.cartButton.click();
      cartPage.removeItem5.click();
      expect(cartPage.cartItem5Href.disabled==true);
    })

    it("should be: removing item and checkout", () => {
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.addToCartItem2.click();
      inventoryPage.addToCartItem3.click();
      inventoryPage.addToCartItem4.click();
      inventoryPage.addToCartItem5.click();
      inventoryPage.cartButton.click();
      cartPage.removeItem0.click();
      cartPage.removeItem1.click();
      cartPage.removeItem2.click();
      cartPage.removeItem3.click();
      cartPage.removeItem4.click();
      cartPage.removeItem5.click();
      expect(cartPage.cartItem0Href.disabled==true);
      expect(cartPage.cartItem1Href.disabled==true);
      expect(cartPage.cartItem2Href.disabled==true);
      expect(cartPage.cartItem3Href.disabled==true);
      expect(cartPage.cartItem4Href.disabled==true);
      expect(cartPage.cartItem5Href.disabled==true);
    })
  })
})
