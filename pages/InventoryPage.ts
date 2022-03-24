import {isElementDisplayed} from "../util/miscellaneous";
import {click} from "../util/actions";

class InventoryPage {

    menuButton = $("#react-burger-menu-btn");
    logoutLink = $("#logout_sidebar_link");

    async inventoryPageIsDisplayed() {
        return isElementDisplayed(await this.menuButton);
    }

    async clickMenuButton() {
        await click(await this.menuButton);
    }

    async clickLogoutLink() {
        await click(await this.logoutLink);
    }
}

export default new InventoryPage();
