import { AxiosFactory } from "../../AxiosFactory/AxiosFactory"
import { dotEnvConfig } from "../../config/dotEnvConfig"
import { GetDiscordMessages } from "./GetDiscordMessages"

describe("DiscordMessages", () => {
  let axiosInstance = AxiosFactory.default()

  it("should get messages", async () => {
    const messages = await GetDiscordMessages.run({
      authToken: dotEnvConfig.discordAuthToken,
      axiosInstance,
      channelId: "290998643941703680",
    })

    expect(messages).toBeTruthy()
  })
})
