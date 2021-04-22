export const noSpace = (input: string) => {
  return input.split(' ').filter(x => x).join('')
}
