import {
  boolToWord
} from '.'

describe('boolToWord', () => {
  it('should convert boolean values to strings', () => {
    const converted1 = boolToWord(true)
    const converted2 = boolToWord(false)
    expect(converted1).toEqual('Yes')
    expect(converted2).toEqual('No')
  })
})
