import {
  zeroFuel
} from '.'

describe('zeroFill', () => {
  it('should tell if it is possible to get to the pump or not', () => {
    const result1 = zeroFuel(50, 25, 2)
    const result2 = zeroFuel(100, 50, 1)
    expect(result1).toEqual(true)
    expect(result2).toEqual(false)
  })
})
