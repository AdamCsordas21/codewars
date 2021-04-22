import {
  reverseSrq
} from '.'

describe('reverseSeq', () => {
  it('should reverse given list of numbers', () => {
    const nums = reverseSrq([5, 4, 3, 2, 1])
    expect(nums).toEqual([1, 2, 3, 4, 5])
  })
})
