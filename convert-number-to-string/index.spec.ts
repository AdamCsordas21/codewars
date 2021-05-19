import {
  numberToString
} from '.'

describe('numberToString', () => {
  it('should convert number to string', () => {
    const converted = numberToString(21)
    expect(converted).toEqual('21')
  })
})
