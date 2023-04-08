import { AxiosInstance } from "axios"
import { AuthToken } from "../interfaces/AuthToken"
import { DiscordSimplifiedMessage } from "./interfaces/DiscordSimplifiedMessage"
import { DiscordMessage } from "./interfaces/DiscordMessage"
import { GetDiscordMessageProps } from "./interfaces/GetDiscordMessageProps"

export class GetDiscordMessages {
  constructor(
    private readonly authToken: AuthToken,
    private readonly axiosInstance: AxiosInstance
  ) {}

  async getMessages(
    channelId: string,
    limit = 50
  ): Promise<Array<DiscordSimplifiedMessage>> {
    const promise = this.axiosInstance.get<Array<DiscordMessage>>(
      `https://discord.com/api/v9/channels/${channelId}/messages?limit=${limit}`,
      {
        headers: {
          authorization: this.authToken,
        },
      }
    )

    promise.catch(console.error)
    return promise
      .then((response) => response.data)
      .then((messages) =>
        messages.map((message) =>
          DiscordSimplifiedMessage.fromDiscordMessage(message)
        )
      )
  }

  static async run({
    authToken,
    axiosInstance,
    channelId,
    limit = 50,
  }: GetDiscordMessageProps) {
    const instance = new GetDiscordMessages(authToken, axiosInstance)

    return await instance.getMessages(channelId, limit)
  }
}
