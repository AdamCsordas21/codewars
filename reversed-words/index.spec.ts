import {
  reverseWords
} from '.'

describe('reversedWords', () => {
  it('should return a reversed string', () => {
    const reversed1 = reverseWords('hello world!')
    const reverse2 = reverseWords('Manchester United')
    const reverse3 = reverseWords('Glory Glory ManUnited!')
    expect(reversed1).toEqual('world! hello')
    expect(reverse2).toEqual('United Manchester')
    expect(reverse3).toEqual('ManUnited! Glory Glory')
  })
})
