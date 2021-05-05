import {
  reverseWords
} from '.'

describe('reversedWords', () => {
  it('should return a reversed string', () => {
    const reversed1 = reverseWords('hello world!')
    expect(reversed1).toEqual('world! hello')
  })
})
