import {
  removeChar
} from '.'

describe('removeChar', () => {
  it('should remove first and last characther of a given element', () => {
    const name1 = removeChar('Pogba')
    const name2 = removeChar('Rashford')
    const name3 = removeChar('Fernandes')
    const name4 = removeChar('Cavani')
    expect(name1).toEqual('ogb')
    expect(name2).toEqual('ashfor')
    expect(name3).toEqual('ernande')
    expect(name4).toEqual('avan')
  })
})
