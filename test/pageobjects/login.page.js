
const Page = require('./page');

class LoginPage extends Page {
	get username () {return $("//*[@id='user-name']")}
	get password () {return $("//*[@id='password']")}
	get button () {return $("//*[@id='login-button']")}
  get error () {return $("//*[@id='login_button_container']/div/form/div[3]/h3")}
  get usernameRedcross () {return $("//*[@id='login_button_container']/div/form/div[1]/svg")}
  get passwordRedcross () {return $("//*[@id='login_button_container']/div/form/div[2]/svg")}
  
	open () {
		return super.open('');
	}
}

module.exports = new LoginPage();