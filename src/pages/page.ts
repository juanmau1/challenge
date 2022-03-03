/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

import * as data from "../../data.json";
import report from "@wdio/allure-reporter"

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open() {
        let url: string = data.url

        browser.url(url)
        browser.maximizeWindow()
        //browser.setWindowSize(4096, 2160)
        console.log(" Info - open url " + url)

    }
    public async enterText(element, text) {
        await element.clearValue()
        await element.setValue(text)
    }
    public async pressEnter() {
        browser.keys("\uE007")
    }
    public async waitUntilCondition(condition: boolean, timeout: number, message: string) {
        await browser.waitUntil(
            async () => condition,
            {
                timeout: timeout,
                timeoutMsg: message
            }
        );
    }

    public async log(text) {
        report.addAttachment(" Log ",text, "text/plain")
        console.log(text)
    }
    public async takeScreenshot() {
        report.addAttachment("screenshot ", await browser.takeScreenshot(), "image/png")
        browser.takeScreenshot()
    }

}
