const Page = require("./page");

class cartPage extends Page {
	get cartItem0Href () {return $("//*[@id='item_0_title_link']")}
	get cartItem1Href () {return $("//*[@id='item_1_title_link']")}
	get cartItem2Href () {return $("//*[@id='item_2_title_link']")}
	get cartItem3Href () {return $("//*[@id='item_3_title_link']")}
	get cartItem4Href () {return $("//*[@id='item_4_title_link']")}
	get cartItem5Href () {return $("//*[@id='item_5_title_link']")}

  get removeItem0 () {return $("//*[@id='remove-sauce-labs-bike-light']")}
	get removeItem1 () {return $("//*[@id='remove-sauce-labs-bolt-t-shirt']")}
	get removeItem2 () {return $("//*[@id='remove-sauce-labs-onesie']")}
	get removeItem3 () {return $("//*[@id='remove-test.allthethings()-t-shirt-(red)']")}
	get removeItem4 () {return $("//*[@id='remove-sauce-labs-backpack']")}
	get removeItem5 () {return $("//*[@id='remove-sauce-labs-fleece-jacket']")}
  
  get continueShoppingButton () {return $("//*[@id='continue-shopping']")}
  get checkoutButton () {return $("//*[@id='checkout']")}

	open () {
		return super.open("");
	}
}

module.exports = new cartPage();