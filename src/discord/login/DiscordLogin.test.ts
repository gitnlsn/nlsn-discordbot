import { AxiosInstance } from "axios"
import { DiscordLogin } from "./DiscordLogin"
import { dotEnvConfig } from "../../config/dotEnvConfig"
import { AxiosFactory } from "../../AxiosFactory/AxiosFactory"

describe("DiscordLogin", () => {
  let axiosInstance: AxiosInstance

  beforeAll(() => {
    axiosInstance = AxiosFactory.default()
  })

  it("should login", async () => {
    const token = await DiscordLogin.run({
      email: dotEnvConfig.discordEmail,
      password: dotEnvConfig.discordPassword,
      axiosInstance,
    })

    expect(token).toBeTruthy()
  })
})
