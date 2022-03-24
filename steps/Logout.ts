import {When, DataTable, Then} from "@cucumber/cucumber";
import HomePage from "../pages/HomePage";
import InventoryPage from "../pages/InventoryPage";
import {assertTrue} from "../util/assertions";


When(/^I navigate to the 'Inventory' page as a logged in user$/, async (table: DataTable) => {
    await HomePage.open();
    const data = table.hashes();
    await HomePage.enterUsernameinUsernameTextbox(data[0].username);
    await HomePage.enterPasswordinPasswordTextbox(data[0].password);
    await HomePage.clickLoginButton();
    expect(await InventoryPage.inventoryPageIsDisplayed()).toBe(true);
});

When(/^I click the 'Menu' button on the 'Inventory' page$/, async () => {
    await InventoryPage.clickMenuButton();
});

When(/^I click the 'LOGOUT' link on the 'Menu' section$/, async () => {
    await InventoryPage.clickLogoutLink();
});

Then(/^the 'Home Page' is displayed$/, async () => {
    await assertTrue(await HomePage.homePageIsDisplayed());
});
