export interface DiscordEmbed {
  type: string
  url: string
  title: string
  description: string
  provider: { name: string }
  thumbnail: {
    url: string
    proxy_url: string
    width: number
    height: number
  }
}
