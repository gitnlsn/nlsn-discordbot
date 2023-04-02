import { Browser, Page } from "puppeteer"
import { config } from "../config/dotenv"
import { BrowserFactory } from "../puppeteer/BrowserFactory"
import { sleep } from "../utils.ts/sleep"
import { DiscordNavigator } from "./DiscordNavigator"

describe("DiscordNavigator", () => {
  let browser: Browser
  let page: Page

  beforeEach(async () => {
    browser = await BrowserFactory.stealth()
    page = await browser.newPage()
  })

  afterEach(async () => {
    await page.close()
    await browser.close()
  })

  it("should create navigator", async () => {
    const discordNavigator = await DiscordNavigator.create({
      id: "testing-navigation",
      page,
    })

    expect(discordNavigator).toBeTruthy()
  })

  it("should take screenshot", async () => {
    const discordNavigator = await DiscordNavigator.create({
      id: "testing-navigation",
      page,
    })

    const screenshot = await discordNavigator.takeScreenshot("take-screenshot")
    expect(screenshot).toBeTruthy()
  })

  it("should login", async () => {
    const discordNavigator = await DiscordNavigator.create({
      id: "testing-navigation",
      page,
    })

    await discordNavigator.login({
      email: config.discordEmail,
      password: config.discordPassword,
    })

    await sleep(300)

    const screenshot = await discordNavigator.takeScreenshot("login")
    expect(screenshot).toBeTruthy()
  }, 120000)

  it("should navigate to music channel", async () => {
    const discordNavigator = await DiscordNavigator.create({
      id: "testing-navigation",
      page,
    })

    await discordNavigator.login({
      email: config.discordEmail,
      password: config.discordPassword,
    })

    await sleep(300)

    await discordNavigator.gotoAnimeSoulMusicChannel()

    const screenshot = await discordNavigator.takeScreenshot("music-channel")
    expect(screenshot).toBeTruthy()
  }, 180000)
})
