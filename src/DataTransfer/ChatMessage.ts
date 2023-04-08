import { z } from "zod"
import { DiscordSimplifiedMessage } from "../discord/messages/interfaces/DiscordSimplifiedMessage"

const ChatMessageZodSchema = z.object({
  author: z.string(),
  content: z.string(),
  date: z.string().pipe(z.coerce.date()),
})

export class ChatMessage {
  constructor(
    readonly author: string,
    readonly content: string,
    readonly date: Date
  ) {}

  static fromJsonString(jsonString: string): Array<ChatMessage> {
    const messagesSchema = z.array(ChatMessageZodSchema)

    return messagesSchema
      .parse(JSON.parse(jsonString))
      .map(
        ({ author, content, date }) => new ChatMessage(author, content, date)
      )
  }

  static fromDiscordMessage(message: DiscordSimplifiedMessage): ChatMessage {
    return new ChatMessage(message.author, message.message, message.date)
  }
}
