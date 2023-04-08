import { DiscordMessage } from "./DiscordMessage"

export class DiscordSimplifiedMessage {
  constructor(
    public readonly author: string,
    public readonly message: string,
    public readonly date: Date
  ) {}

  static fromDiscordMessage(message: DiscordMessage): DiscordSimplifiedMessage {
    return {
      author: message.author.username,
      message: message.content,
      date: new Date(message.timestamp),
    }
  }
}
