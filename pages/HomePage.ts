import {click, enterText} from "../util/actions";
import {isElementDisplayed} from "../util/miscellaneous";
import {waitForElementToExist} from "../util/waits";

class HomePage {

    usernameTextbox = $("#user-name");
    passwordTextbox = $("#password");
    loginButton = $("#login-button");
    lockedOutAccountErrorMsg = $('h3=Epic sadface: Sorry, this user has been locked out.');
    credentialsMismatchErrorMsg = $('h3=Epic sadface: Username and password do not match any user in this service');
    missingUsernameErrorMsg = $('h3=Epic sadface: Username is required');
    missingPasswordErrorMsg = $('h3=Epic sadface: Password is required');

    open = async () => {
        await browser.url("/");
    };

    async enterUsernameinUsernameTextbox(username: string) {
        await enterText(await this.usernameTextbox, username);
    };

    async enterPasswordinPasswordTextbox(password: string) {
        await enterText(await this.passwordTextbox, password);
    };

    async clickLoginButton() {
        await click(await this.loginButton);
    };

    async homePageIsDisplayed() {
        await click(await this.usernameTextbox); //needed for safari
        return isElementDisplayed(await this.usernameTextbox);
    };

    async lockedOutAccountErrorMsgIsDisplayed() {
        await waitForElementToExist(await this.lockedOutAccountErrorMsg, 5000);
        return isElementDisplayed(await this.lockedOutAccountErrorMsg);
    };

    async credentialsMismatchErrorMsgIsDisplayed() {
        await waitForElementToExist(await this.credentialsMismatchErrorMsg, 5000);
        return isElementDisplayed(await this.credentialsMismatchErrorMsg);
    };

    async missingUsernameErrorMsgIsDisplayed() {
        await waitForElementToExist(await this.missingUsernameErrorMsg, 5000);
        return isElementDisplayed(await this.missingUsernameErrorMsg);
    };

    async missingPasswordErrorMsgIsDisplayed() {
        await waitForElementToExist(await this.missingPasswordErrorMsg, 5000);
        return isElementDisplayed(await this.missingPasswordErrorMsg);
    };
}

export default new HomePage();
