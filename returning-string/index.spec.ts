import {
  greet
} from '.'

describe('greeting function', () => {
  it('should return a greeting message', () => {
    const name = 'Boris'
    expect(greet(name)).toEqual('Hello, Boris how are you doing today?')
  })
})
