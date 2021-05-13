const loginPage = require('../pageobjects/login.page.js');

describe('Login tests', () => {
  beforeAll("Open browser", () =>{
		loginPage.open();
		browser.pause(1000);
	})
  
  it("should be: Username and password do not match any user in this service when username is invalid",  () =>{
    loginPage.username.setValue("random");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when username is invalid",  () =>{
    loginPage.username.setValue("123");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when username is invalid",  () =>{
    loginPage.username.setValue(['a','b']);
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when username is invalid",  () =>{
    loginPage.username.setValue(true);
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Username is required when username is empty",  () =>{
    loginPage.username.setValue("");
    loginPage.password.setValue("");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username is required");
    browser.refresh();
  })

  it("should be: Username is required when username is empty",  () =>{
    loginPage.username.setValue(undefined);
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username is required");
    browser.refresh();
  })

  it("should be: Username is required when username is empty",  () =>{
    loginPage.username.setValue(null);
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username is required");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when password is invalid",  () =>{
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue("123");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when password is invalid",  () =>{
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue("standard_user");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when password is invalid",  () =>{
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue(true);
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when password is invalid",  () =>{
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue(['a','b']);
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Password is required when password is empty",  () =>{
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue("");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Password is required");
    browser.refresh();
  })

  it("should be: Password is required when password is empty",  () =>{
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue(undefined);
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Password is required");
    browser.refresh();
  })

  it("should be: Password is required when password is empty",  () =>{
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue(null);
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Password is required");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when inputs are invalid",  () =>{
    loginPage.username.setValue("double");
    loginPage.password.setValue("random");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when inputs are invalid",  () =>{
    loginPage.username.setValue(['a','b']);
    loginPage.password.setValue("123456");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: Username and password do not match any user in this service when inputs are invalid",  () =>{
    loginPage.username.setValue(true);
    loginPage.password.setValue(false);
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service");
    browser.refresh();
  })

  it("should be: redcross in username field and password field when username is invalid",  () =>{
    loginPage.username.setValue("random");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(loginPage.usernameRedcross.isExisting());
    expect(loginPage.passwordRedcross.isExisting());
    browser.refresh();
  })

  it("should be: redcross in username field and password field when password is invalid",  () =>{
    loginPage.username.setValue("standard_user");
    loginPage.password.setValue("123");
    loginPage.button.click();
    expect(loginPage.usernameRedcross.isExisting());
    expect(loginPage.passwordRedcross.isExisting());
    browser.refresh();
  })

  it("should be: Sorry, this user has been locked out. when username is locked", () =>{
		loginPage.username.setValue("locked_out_user");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(loginPage.error).toHaveTextContaining(
      "Epic sadface: Sorry, this user has been locked out.");
  })

	it("should be: enter into page with valid user and password", () =>{
		loginPage.username.setValue("standard_user");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })

  it("should be: enter into page with valid user and password", () =>{
    loginPage.open();
		browser.pause(1000);
		loginPage.username.setValue("performance_glitch_user");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })

  it("should be: enter into page with valid user and password", () =>{
    loginPage.open();
		browser.pause(1000);
		loginPage.username.setValue("problem_user");
    loginPage.password.setValue("secret_sauce");
    loginPage.button.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })
});