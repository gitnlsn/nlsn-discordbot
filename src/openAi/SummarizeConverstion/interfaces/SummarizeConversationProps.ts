import { OpenAIApi } from "openai"
import { ChatMessage } from "../../../DataTransfer/ChatMessage"

export interface SummarizeConversationProps {
  openAiApi: OpenAIApi
  messages: Array<ChatMessage>
}
