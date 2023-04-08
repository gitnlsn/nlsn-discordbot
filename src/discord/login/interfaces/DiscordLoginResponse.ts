export interface DiscordLoginResponse {
  token: string
  user_settings: { locale: string; theme: string }
  user_id: string // number
}
