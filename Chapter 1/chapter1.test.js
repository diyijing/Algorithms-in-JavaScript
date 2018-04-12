// const gcd = require('./gcd');
import gcd from './gcd';
import binarySeach from './BinarySearch';
test('gcd of 5,10 is 5', () => {
    expect(gcd(5, 10)).toBe(5);
});

const arr = [1, 3, 5, 6, 8, 12];
test('binarySeach [1,3,5,6,8,12] find 3 in 1', () => {
    expect(binarySeach(3, arr)).toBe(1);
});

test(`binarySeach ${arr} not find 2`, () => {
    expect(binarySeach(2, arr)).toBe(-1);
});
