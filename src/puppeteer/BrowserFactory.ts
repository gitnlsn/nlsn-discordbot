import puppeteer, { Browser, Viewport } from "puppeteer"
import puppeteerExtra from "puppeteer-extra"
import StealthPlugin from "puppeteer-extra-plugin-stealth"

puppeteerExtra.use(StealthPlugin())

const defaultViewport: Viewport = {
  width: 1024,
  height: 800,
}

export class BrowserFactory {
  private constructor() {}

  static default(): Promise<Browser> {
    return puppeteer.launch({
      args: [
        `--window-size=${defaultViewport.width},${defaultViewport.height}`,
        "--incognito",
      ],
      defaultViewport,
    })
  }

  static stealth(): Promise<Browser> {
    return puppeteerExtra.launch({
      args: [
        `--window-size=${defaultViewport.width},${defaultViewport.height}`,
        "--incognito",
      ],
      defaultViewport,
    })
  }
}
