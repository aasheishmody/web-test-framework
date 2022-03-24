export const enterText = async (element: WebdriverIO.Element, text: any) => {
    await element.setValue(text);
};

export const click = async (element: WebdriverIO.Element) => {
    await element.click();
};
