import { executeCallback, isPrimeNumber } from "./functions"

describe("Functions", () => {
  it("should tell that 37 is a prime number", () => {
    const result = isPrimeNumber(37)
    expect(result).toBeTruthy()
  })
  it("should tell that 4 is not a prime number", () => {
    const result = isPrimeNumber(4)
    expect(result).toBeFalsy()
  })
  it("should execute callback", () => {
    const mockFn = jest.fn()
    executeCallback(mockFn)
    expect(mockFn).toBeCalled()
  })
})
