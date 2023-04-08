import { DiscordSimplifiedMessage } from "../interfaces/DiscordSimplifiedMessage"

/**
 * filter callback to remove JockieMusic bot messages 
 */
export const noJockieMusicBotMessage = (message: DiscordSimplifiedMessage) =>
  message.author !== "Jockie Music"
