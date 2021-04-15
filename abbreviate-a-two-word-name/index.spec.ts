import {
  abbrevName
} from '.'

describe('converts a name into initials', () => {
  it('should return a proper abbreviate', () => {
    const SamHarris = abbrevName('Sam Harris')
    const PatrickFeenan = abbrevName('Patrick Feenan')
    const RFavuzzi = abbrevName('R Favuzzi')
    expect(SamHarris).toEqual('S.H.')
    expect(PatrickFeenan).toEqual('P.F.')
    expect(RFavuzzi).toEqual('R.F.')
  })
})
