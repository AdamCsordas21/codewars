import {
  noSpace
} from '.'

describe('noSpace', () => {
  it('should remove spaces in a given string', () => {
    const str1 = noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')
    const str2 = noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')
    const str3 = noSpace('8aaaaa dddd r     ')
    expect(str1).toEqual('8j8mBliB8gimjB8B8jlB')
    expect(str2).toEqual('88Bifk8hB8BB8BBBB888chl8BhBfd')
    expect(str3).toEqual('8aaaaaddddr')
  })
})
