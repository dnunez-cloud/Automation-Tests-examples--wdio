const Page = require("./page");

class checkoutPage extends Page {
	get firstName () {return $("//*[@id='first-name']")}
	get lastName () {return $("//*[@id='last-name']")}
	get postalCode () {return $("//*[@id='postal-code']")}
	
  get cancelButton () {return $("//*[@id='cancel']")}
  get continueButton () {return $("//*[@id='continue']")}
  get finishButton () {return $("//*[@id='finish']")}
	get error () {return $("//*[@id='checkout_info_container']/div/form/div[1]/div[4]/h3")}
	get backHome () {return $("//*[@id='back-to-products']")}
  get totalContainer () {return $("//*[@id='checkout_summary_container']/div/div[2]/div[7]")}

	open () {
		return super.open("checkout-step-one.html");
	}
}

module.exports = new checkoutPage();