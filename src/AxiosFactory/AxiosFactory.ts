import axios from "axios"

export class AxiosFactory {
  static default() {
    return axios.create({
      headers: {
        "user-agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
      },
    })
  }
}
