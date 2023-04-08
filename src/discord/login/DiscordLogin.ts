import { AxiosInstance } from "axios"
import { AuthToken } from "../interfaces/AuthToken"
import { DiscordLoginCredentials } from "./interfaces/DiscordLoginCredentials"
import { DiscordLoginPayload } from "./interfaces/DiscordLoginPayload"
import { DiscordLoginResponse } from "./interfaces/DiscordLoginResponse"
import { Email } from "./interfaces/Email"
import { Password } from "./interfaces/Password"
import { WithAxiosInstance } from "./interfaces/WithAxiosInstance"

export class DiscordLogin {
  constructor(
    private readonly email: Email,
    private readonly password: Password,
    private readonly axiosInstance: AxiosInstance
  ) {}

  async getAuthToken(): Promise<AuthToken> {
    return await this.axiosInstance
      .post<DiscordLoginResponse>("https://discord.com/api/v9/auth/login", {
        // Required values
        login: this.email,
        password: this.password,

        // hardcoded values
        undelete: false,
        captcha_key: null,
        login_source: null,
        gift_code_sku_id: null,
      } as DiscordLoginPayload)
      .then((response) => response.data.token)
  }

  static async run({
    email,
    password,
    axiosInstance,
  }: DiscordLoginCredentials & WithAxiosInstance) {
    const instance = new DiscordLogin(email, password, axiosInstance)

    return await instance.getAuthToken()
  }
}
