import * as rhooks from '..';

describe('rhooks', () => {
  test('export modules be defined', () => {
    Object.keys(rhooks).forEach((key) => {
      expect(rhooks[key]).toBeDefined()
    })
  })
});