import { sleep } from "./sleep"

jest.useFakeTimers()

describe("sleep", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should return global.setTimeout", () => {
    const mockedSetTimeout = jest.spyOn(global, "setTimeout")

    sleep(100)

    expect(mockedSetTimeout).toHaveBeenCalledTimes(1)
    expect(mockedSetTimeout).toHaveBeenCalledWith(expect.anything(), 100)
  })

  it("should trigger after timeout call", async () => {
    const callback = jest.fn()
    const sleepPromise = sleep(60000).then(() => callback())

    jest.runAllTimers()

    await sleepPromise

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
