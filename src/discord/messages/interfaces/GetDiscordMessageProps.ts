import { AxiosInstance } from "axios"
import { AuthToken } from "../../interfaces/AuthToken"

export interface GetDiscordMessageProps {
  authToken: AuthToken
  axiosInstance: AxiosInstance

  channelId: string
  limit?: number
}
