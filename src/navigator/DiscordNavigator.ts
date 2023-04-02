import { Page } from "puppeteer"
import { RequestInterceptor } from "./utils/RequestInterceptor"

interface DiscordNavigatorCreateProps {
  id: string
  page: Page
}

interface DiscordCredentials {
  email: string
  password: string
}

export class DiscordNavigator {
  private constructor(
    private readonly id: string,
    public readonly page: Page
  ) {}

  static async create(props: DiscordNavigatorCreateProps) {
    const navigator = new DiscordNavigator(props.id, props.page)

    await navigator.page.setRequestInterception(true)
    navigator.page.on("request", RequestInterceptor)

    return navigator
  }

  /**
   * Prefixes screenshot path with id
   */
  async takeScreenshot(path?: string) {
    return await this.page.screenshot({
      path: `./${this.id}-${path ?? "currentState"}.png`,
    })
  }

  async login(credentials: DiscordCredentials) {
    await this.page.goto("https://discord.com/login")
    await this.takeScreenshot("login-goto")
    await this.page.waitForNetworkIdle()

    await this.page.type("input[name=email]", credentials.email, { delay: 100 })
    await this.page.type("input[name=password]", credentials.password, {
      delay: 100,
    })

    await this.page.click('button[type="submit"]')

    await this.page.waitForNetworkIdle()

    await this.page.waitForSelector('div[data-dnd-name="Anime Soul Discord"]')
  }

  async gotoAnimeSoulMusicChannel() {
    await this.page.goto(
      "https://discord.com/channels/290843998296342529/290998643941703680"
    )

    await this.page.waitForSelector('li[data-dnd-name="🎵music"]', {
      timeout: 60000,
    })
  }
}
