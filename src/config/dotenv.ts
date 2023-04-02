/**
 * Utility to access necessary process.env inside application
 */
export const config = {
  discordEmail: String(process.env.DISCORD_EMAIL),
  discordPassword: String(process.env.DISCORD_PASSWORD),
}
