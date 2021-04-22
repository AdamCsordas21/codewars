export const noSpace = (x: string) => {
  return x.split(' ').filter(x => x).join('')
}
