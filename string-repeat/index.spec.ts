import {
  repeatStr
} from '.'

describe('repeatStr', () => {
  it('should repeat a given string exactly the given time', () => {
    const repeat = repeatStr(3, '*')
    const repeat2 = repeatStr(5, '$$')
    const repeat3 = repeatStr(6, '£££')
    expect(repeat).toEqual('***')
    expect(repeat2).toEqual('$$$$$$$$$$')
    expect(repeat3).toEqual('££££££££££££££££££')
  })
})
