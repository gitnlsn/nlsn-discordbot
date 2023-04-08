import { ChatCompletionResponseMessageRoleEnum, OpenAIApi } from "openai"
import { OpenAIFactory } from "../Factory/OpenAiFactory"
import { SummarizeConversation } from "./SummarizeConversation"
import { mockedChatMessages } from "./testUtils/discordMessages"

describe("SummarizeConversation", () => {
  let openAiApi: OpenAIApi

  beforeAll(() => {
    openAiApi = OpenAIFactory.default()
  })

  it("should get completion", async () => {
    const completion = await SummarizeConversation.run({
      openAiApi,
      messages: mockedChatMessages,
    })

    expect(completion).toBeTruthy()
  }, 60000)
})
