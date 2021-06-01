import {
  digitize
} from '.'

describe('digitize', () => {
  it('should convert number too a reversed array of digits', () => {
    const digitized = digitize(35231)
    const digitized2 = digitize(9764197654)
    expect(digitized).toEqual([1, 3, 2, 5, 3])
    expect(digitized2).toEqual([4, 5, 6, 7, 9, 1, 4, 6, 7, 9])
  })
})
