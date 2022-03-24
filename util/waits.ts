export const waitForElementToExist = async (
    element: WebdriverIO.Element,
    timeout: number
) => {
    await element.waitForExist({
        timeout
    });
};
