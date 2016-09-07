import { add } from '../add.js';

describe('add()', function() {
  it('adds two numbers', function() {
    expect(add(2, 3)).toEqual(5);
  });

  it('doesnt add the third number', function() {
    expect(add(2, 3, 5)).toEqual(add(2, 3));
  });
});
