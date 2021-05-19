import {
  numberToString
} from '.'

describe('numberToString', () => {
  it('should convert number to string', () => {
    const converted = numberToString(21)
    const converted2 = numberToString(99999)
    expect(converted).toEqual('21')
    expect(converted2).toEqual('99999')
  })
})
