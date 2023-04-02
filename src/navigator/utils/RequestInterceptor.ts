import { HTTPRequest } from "puppeteer"

const scienceDiscordUrl = "https://discord.com/api/v9/science"

export const RequestInterceptor = async (request: HTTPRequest) => {
  if (request.url() === scienceDiscordUrl) {
    return await request.abort()
  }

  const headers = request.headers()
  return await request.continue({
    headers: {
      ...headers,
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    },
  })
}
