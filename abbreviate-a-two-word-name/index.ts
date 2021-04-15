export const abbrevName = (name: string): string =>
  name.split(' ').map(e => e[0].toUpperCase()).join('.') + '.'
