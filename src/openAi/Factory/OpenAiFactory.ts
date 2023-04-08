import { Configuration, OpenAIApi } from "openai"
import { dotEnvConfig } from "../../config/dotEnvConfig"

export class OpenAIFactory {
  static default() {
    return new OpenAIApi(
      new Configuration({
        apiKey: dotEnvConfig.openAiApiKey,
      })
    )
  }
}
