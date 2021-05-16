
const Page = require("./page");

class inventoryPage extends Page {
	get burguerButton () {return $("//*[@id='menu_button_container']/div/div[1]/div")}
	get burguerButtonAllitems () {return $("//*[@id='inventory_sidebar_link']")}
	get burguerButtonAbout () {return $("//*[@id='about_sidebar_link']")}
	get burguerButtonLogout () {return $("//*[@id='logout_sidebar_link']")}
	get burguerButtonReset () {return $("//*[@id='reset_sidebar_link']")}
	get burguerButtonCross () {return $("//*[@id='react-burger-cross-btn']")}

	get cartButton () {return $("//*[@id='shopping_cart_container']/a")}
	get cartValue () {return $("//*[@id='shopping_cart_container']/a/span")}
	get backToProductsButton () {return $("//*[@id='back-to-products']")}

	get selectSort () {return $("//*[@id='header_container']/div[2]/div[2]/span/select")}
	get selectSortActive () {return $("//*[@id='header_container']/div[2]/div[2]/span/span")}
	get selectSortOption1 () {return $("//*[@id='header_container']/div[2]/div[2]/span/select/option[1]")}
	get selectSortOption2 () {return $("//*[@id='header_container']/div[2]/div[2]/span/select/option[2]")}
	get selectSortOption3 () {return $("//*[@id='header_container']/div[2]/div[2]/span/select/option[3]")}
	get selectSortOption4 () {return $("//*[@id='header_container']/div[2]/div[2]/span/select/option[4]")}

	get item0Href () {return $("//*[@id='item_0_title_link']")}
	get item1Href () {return $("//*[@id='item_1_title_link']")}
	get item2Href () {return $("//*[@id='item_2_title_link']")}
	get item3Href () {return $("//*[@id='item_3_title_link']")}
	get item4Href () {return $("//*[@id='item_4_title_link']")}
	get item5Href () {return $("//*[@id='item_5_title_link']")}

	get addToCartItem0 () {return $("//*[@id='add-to-cart-sauce-labs-bike-light']")}
	get addToCartItem1 () {return $("//*[@id='add-to-cart-sauce-labs-bolt-t-shirt']")}
	get addToCartItem2 () {return $("//*[@id='add-to-cart-sauce-labs-onesie']")}
	get addToCartItem3 () {return $("//*[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")}
	get addToCartItem4 () {return $("//*[@id='add-to-cart-sauce-labs-backpack']")}
	get addToCartItem5 () {return $("//*[@id='add-to-cart-sauce-labs-fleece-jacket']")}

	get removeItem0 () {return $("//*[@id='remove-sauce-labs-bike-light']")}
	get removeItem1 () {return $("//*[@id='remove-sauce-labs-bolt-t-shirt']")}
	get removeItem2 () {return $("//*[@id='remove-sauce-labs-onesie']")}
	get removeItem3 () {return $("//*[@id='remove-test.allthethings()-t-shirt-(red)']")}
	get removeItem4 () {return $("//*[@id='remove-sauce-labs-backpack']")}
	get removeItem5 () {return $("//*[@id='remove-sauce-labs-fleece-jacket']")}

	get twitterHref () {return $("//*[@id='page_wrapper']/footer/ul/li[1]/a")}
	get facebookHref () {return $("//*[@id='page_wrapper']/footer/ul/li[2]/a")}
	get linkedinHref () {return $("//*[@id='page_wrapper']/footer/ul/li[3]/a")}

	open () {
		return super.open("inventory.html");
	}
}

module.exports = new inventoryPage();