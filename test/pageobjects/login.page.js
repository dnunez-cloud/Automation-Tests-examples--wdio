
const Page = require('./page');

class LoginPage extends Page {
	get username () {return $("//*[@id='user-name']")}
	get password () {return $("//*[@id='password']")}
	get button () {return $("//*[@id='login-button']")}
  get error() {return $("//*[@id='login_button_container']/div/form/div[3]/h3")}
  
	open () {
		return super.open('');
	}
}

module.exports = new LoginPage();