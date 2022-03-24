import {Given, When, DataTable, Then} from "@cucumber/cucumber";
import HomePage from "../pages/HomePage";
import InventoryPage from "../pages/InventoryPage";
import {assertTrue} from "../util/assertions";

Given("I navigate to the 'Home' page", async () => {
    await HomePage.open();
});

When(/^I enter <username> in the 'Username' textbox on the 'Home' page$/, async (username: DataTable) => {
    const data = username.hashes();
    await HomePage.enterUsernameinUsernameTextbox(data[0].username);
});

When(/^I enter <password> in the 'Password' textbox on the 'Home' page$/, async (password: DataTable) => {
    const data = password.hashes();
    await HomePage.enterPasswordinPasswordTextbox(data[0].password);
});

When(/^I click the 'LOGIN' button on the 'Home' page$/, async () => {
    await HomePage.clickLoginButton();
});

Then(/^the 'Inventory' page is displayed$/, async () => {
    await assertTrue(await InventoryPage.inventoryPageIsDisplayed());
});

Then(/^the 'locked out account' error message is displayed on the 'Home' page$/, async () => {
    await assertTrue(await HomePage.lockedOutAccountErrorMsgIsDisplayed());
});

Then(/^the 'credentials mismatch' error message is displayed on the 'Home' page$/, async () => {
    await assertTrue(await HomePage.credentialsMismatchErrorMsgIsDisplayed());
});

Then(/^the 'missing username' error message is displayed on the 'Home' page$/, async () => {
    await assertTrue(await HomePage.missingUsernameErrorMsgIsDisplayed());
});

Then(/^the 'missing password' error message is displayed on the 'Home' page$/, async () => {
    await assertTrue(await HomePage.missingPasswordErrorMsgIsDisplayed());
});
