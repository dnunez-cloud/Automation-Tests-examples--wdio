const loginPage = require("../pageobjects/login.page.js");
const inventoryPage = require("../pageobjects/inventory.page.js");

describe("inventory tests", () => {
  beforeAll("Open browser", () =>{
		loginPage.open();
		browser.pause(1000);
	})

  it("should be: enter into page with valid user and password", () =>{
		loginPage.username.setValue("standard_user");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
  })

  it("should be: enter into same page", () =>{
    inventoryPage.burguerButton.click();
    inventoryPage.burguerButtonAllitems.click();
    expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    inventoryPage.burguerButtonCross.click();
  })

  it("should be: enter into About page", () =>{
    inventoryPage.burguerButton.click();
    inventoryPage.burguerButtonAbout.click();
    expect(browser).toHaveUrl("https://saucelabs.com/");
    browser.back();
  })

  it("should be: Reset value", () =>{
    inventoryPage.addToCartItem0.click();
    inventoryPage.burguerButton.click();
    inventoryPage.burguerButtonReset.click();
    expect(inventoryPage.cartValue.disabled==true);
    inventoryPage.removeItem0.click();
  })

  it("should be: enter into Cart page", () =>{
    inventoryPage.cartButton.click();
    expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
    browser.back();
  })

  describe ("Sort select tests", () => {
    it("should be: check default option", () => {
      expect(inventoryPage.selectSortActive).toHaveTextContaining("NAME (A TO Z)");
    })

    it("should be: select option 1", () => {
      inventoryPage.selectSort.click();
      inventoryPage.selectSortOption2.click();
      inventoryPage.selectSortOption1.click();
      expect(inventoryPage.selectSortActive).toHaveTextContaining("NAME (A TO Z)");
    })

    it("should be: select option 2", () => {
      inventoryPage.selectSort.click();
      inventoryPage.selectSortOption2.click();
      expect(inventoryPage.selectSortActive).toHaveTextContaining("NAME (Z TO A)");
    })

    it("should be: select option 3", () => {
      inventoryPage.selectSort.click();
      inventoryPage.selectSortOption3.click();
      expect(inventoryPage.selectSortActive).toHaveTextContaining("PRICE (LOW TO HIGH)");
    })

    it("should be: select option 4", () => {
      inventoryPage.selectSort.click();
      inventoryPage.selectSortOption4.click();
      expect(inventoryPage.selectSortActive).toHaveTextContaining("PRICE (HIGH TO LOW)");
    })
  })

  describe ("Items Click title tests", () => {
    it("should be: enter in item 0", () => {
      inventoryPage.item0Href.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=0");
      inventoryPage.backToProductsButton.click();
    })

    it("should be: enter in item 1", () => {
      inventoryPage.item1Href.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=1");
      inventoryPage.backToProductsButton.click();
    })

    it("should be: enter in item 2", () => {
      inventoryPage.item2Href.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=2");
      inventoryPage.backToProductsButton.click();
    })

    it("should be: enter in item 3", () => {
      inventoryPage.item3Href.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=3");
      inventoryPage.backToProductsButton.click();
    })

    it("should be: enter in item 4", () => {
      inventoryPage.item4Href.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=4");
      inventoryPage.backToProductsButton.click();
    })

    it("should be: enter in item 5", () => {
      inventoryPage.item5Href.click();
      expect(browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=5");
      inventoryPage.backToProductsButton.click();
    })
  })

  describe ("Items Add to cart tests", () => {
    it("should be: add item 0", () => {
      inventoryPage.addToCartItem0.click();
      expect(inventoryPage.removeItem0.isEnabled());
    })

    it("should be: add item 1", () => {
      inventoryPage.addToCartItem1.click();
      expect(inventoryPage.removeItem1.isEnabled());
    })

    it("should be: add item 2", () => {
      inventoryPage.addToCartItem2.click();
      expect(inventoryPage.removeItem2.isEnabled());
    })

    it("should be: add item 3", () => {
      inventoryPage.addToCartItem3.click();
      expect(inventoryPage.removeItem3.isEnabled());
    })

    it("should be: add item 4", () => {
      inventoryPage.addToCartItem4.click();
      expect(inventoryPage.removeItem4.isEnabled());
    })

    it("should be: add item 5", () => {
      inventoryPage.addToCartItem5.click();
      expect(inventoryPage.removeItem5.isEnabled());
    })
  })

  describe ("Remove Items from cart tests", () => {
    it("should be: remove item 0", () => {
      inventoryPage.removeItem0.click();
      expect(inventoryPage.addToCartItem0.isEnabled());
    })

    it("should be: remove item 1", () => {
      inventoryPage.removeItem1.click();
      expect(inventoryPage.addToCartItem1.isEnabled());
    })

    it("should be: remove item 2", () => {
      inventoryPage.removeItem2.click();
      expect(inventoryPage.addToCartItem2.isEnabled());
    })

    it("should be: remove item 3", () => {
      inventoryPage.removeItem3.click();
      expect(inventoryPage.addToCartItem3.isEnabled());
    })

    it("should be: remove item 4", () => {
      inventoryPage.removeItem4.click();
      expect(inventoryPage.addToCartItem4.isEnabled());
    })

    it("should be: remove item 5", () => {
      inventoryPage.removeItem5.click();
      expect(inventoryPage.addToCartItem5.isEnabled());
    })
  })

  describe ("add items to cart, checking cart value", () => {
    it("should be: Cart value 1, when 1 item added to cart", () =>{
      inventoryPage.addToCartItem0.click();
      expect(inventoryPage.cartValue).toHaveTextContaining("1");
      inventoryPage.removeItem0.click();
    })

    it("should be: Cart value 3 when 3 items added to cart", () =>{
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.addToCartItem5.click();
      expect(inventoryPage.cartValue).toHaveTextContaining("3");
      inventoryPage.removeItem0.click();
      inventoryPage.removeItem1.click();
      inventoryPage.removeItem5.click();
    })

    it("should be: Cart value 2, when 4 items added to cart & 2 removed", () =>{
      inventoryPage.addToCartItem0.click();
      inventoryPage.addToCartItem1.click();
      inventoryPage.addToCartItem3.click();
      inventoryPage.addToCartItem5.click();
      inventoryPage.removeItem1.click();
      inventoryPage.removeItem3.click();
      expect(inventoryPage.cartValue).toHaveTextContaining("2");
    })
  })

  describe ("social media href tests", () => {
    it("should be: enter into twitter page", () =>{
      inventoryPage.twitterHref.click();
      browser.switchWindow('twitter');
      expect(browser).toHaveUrl("https://twitter.com/saucelabs");
      browser.switchWindow("https://www.saucedemo.com/inventory.html");
    })

    it("should be: enter into facebook page", () =>{
      inventoryPage.facebookHref.click();
      browser.switchWindow("facebook");
      expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
      browser.switchWindow("https://www.saucedemo.com/inventory.html");
    })

    it("should be: enter into linkedin page", () =>{
      inventoryPage.linkedinHref.click();
      browser.switchWindow("linkedin");
      expect(browser).toHaveUrlContaining("linkedin");
      browser.switchWindow("https://www.saucedemo.com/inventory.html");
    })
  })

  it("should be: enter into Logout page", () =>{
    inventoryPage.burguerButton.click();
    inventoryPage.burguerButtonLogout.click();
    expect(browser).toHaveUrl("https://www.saucedemo.com/");
  })
});
  