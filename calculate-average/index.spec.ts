import {
  getAverage
} from '.'

describe('getAverage', () => {
  it('should calculate average of given numbers', () => {
    const average1 = getAverage([1, 1, 1])
    const average2 = getAverage([2, 4, 6])
    const average3 = getAverage([4, 6, 7, 9])
    expect(average1).toEqual(1)
    expect(average2).toEqual(4)
    expect(average3).toEqual(6.5)
  })
})
