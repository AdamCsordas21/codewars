import {
  stringToArray
} from '.'

describe('stringToArray', () => {
  it('should convert a string to an array', () => {
    const converted = stringToArray('TypeScript')
    expect(converted).toEqual(['TypeScript'])
  })
})
