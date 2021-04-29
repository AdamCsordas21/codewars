import {
  repeatStr
} from '.'

describe('repeatStr', () => {
  it('should repeat a given string exactly the given time', () => {
    const repeat = repeatStr(3, '*')
    expect(repeat).toEqual('***')
  })
})
