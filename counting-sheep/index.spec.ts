import {
  countSheeps
} from '.'

describe('countSheeps', () => {
  it('should work correctly', () => {
    const array1 = [true, true, true, false,
      true, true, true, true,
      true, false, true, false,
      true, false, false, true,
      true, true, true, true,
      false, false, true, true]
    const result1 = countSheeps(array1)
    expect(result1).toEqual(17)
  })
})
