import { OpenAIApi } from "openai"
import { ChatMessage } from "../../DataTransfer/ChatMessage"
import { SummarizeConversationProps } from "./interfaces/SummarizeConversationProps"

export class SummarizeConversation {
  constructor(private readonly openAi: OpenAIApi) {}

  private getInstruction() {
    return `Do the following tasks.\n
        1. Summarize the following conversation\n
        2. List me topics of conversation and related users\n
        3. include as a topic messages that are possibly toxic or harmful`
  }

  async getCompletion(messages: Array<ChatMessage>): Promise<string> {
    return await this.openAi
      .createChatCompletion({
        messages: [
          {
            role: "user",
            content: `${this.getInstruction()}\n\n
            ${JSON.stringify(messages)}`,
          },
        ],
        model: "gpt-3.5-turbo",
      })
      .then((response) =>
        response.data.choices
          .map((choice) => choice.message)
          .reduce<string>((acc, next) => {
            if (next === undefined) {
              return acc
            }

            return `${acc}${next.content}`
          }, "")
      )
  }

  static async run({
    openAiApi,
    messages,
  }: SummarizeConversationProps): Promise<string> {
    const instance = new SummarizeConversation(openAiApi)

    return await instance.getCompletion(messages)
  }
}
