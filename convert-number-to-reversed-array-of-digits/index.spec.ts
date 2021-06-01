import {
  digitize
} from '.'

describe('digitize', () => {
  it('should convert number too a reversed array of digits', () => {
    const digitized = digitize(35231)
    expect(digitized).toEqual([1, 3, 2, 5, 3])
  })
})
