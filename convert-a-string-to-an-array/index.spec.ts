import {
  stringToArray
} from '.'

describe('stringToArray', () => {
  it('should convert a string to an array', () => {
    const converted = stringToArray('TypeScript')
    const converted2 = stringToArray('TypeScript & JavaScript.')
    expect(converted).toEqual(['TypeScript'])
    expect(converted2).toEqual(['TypeScript', '&', 'JavaScript.'])
  })
})
