import {
  calculateBMI
} from '.'

describe('calculateBMI', () => {
  it('should calculate body mass index', () => {
    const bmi = calculateBMI(80, 1.80)
    expect(bmi).toEqual('Normal')
  })
})
