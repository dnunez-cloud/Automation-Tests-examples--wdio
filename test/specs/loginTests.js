const loginPage = require('../pageobjects/login.page.js');

describe('Login tests', () => {
  beforeAll("Open browser", () =>{
		loginPage.open();
		browser.pause(1000);
	})

	it("should be: enter into page with valid user and password", () =>{
		loginPage.username.setValue("standard_user");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })

});