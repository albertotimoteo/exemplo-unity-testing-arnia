export const isPrimeNumber = (number: number) => {
  let aux = number - 1
  let isPrime = true

  while (aux >= number / 2) {
    if (number % aux === 0) {
      isPrime = false
      break
    }
    aux = aux - 1
  }

  return isPrime
}

export const executeCallback = (fn: () => void) => {
  return fn()
}
