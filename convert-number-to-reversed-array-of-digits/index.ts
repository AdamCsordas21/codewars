export const digitize = (input: number): number[] => {
  return Array.from(input.toString()).map(Number).reverse()
}
