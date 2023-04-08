/**
 * Utility to access necessary process.env inside application
 */
export const dotEnvConfig = {
  discordEmail: String(process.env.DISCORD_EMAIL),
  discordPassword: String(process.env.DISCORD_PASSWORD),
  discordAuthToken: String(process.env.DISCORD_AUTH_TOKEN),
  openAiApiKey: String(process.env.OPENAI_API_KEY)
}
