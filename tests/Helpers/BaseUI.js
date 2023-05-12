export class BaseUI {
    constructor(page) {
        this.page = page;
    }

     async clearAndSendKeysKeyboard (selector, text) {
        await this.page.waitForSelector(selector, { timeout: 7000 });
        await this.page.click(selector, { clickCount: 3 });
        await this.page.keyboard.press('Backspace');
        await this.page.type(selector, text);
      };
}

