import { adder } from '../src/adder';

describe('adder', () => {
  it('works', () => {
    const result = adder(1, 5);
    expect(result).toBe(6);
  })
});
