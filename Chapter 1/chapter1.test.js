// const gcd = require('./gcd');
import gcd from './gcd';
import binarySeach from './BinarySearch';
import evaluate from './Evaluate';
import {Node, Stack} from './List';
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

test('evaluate ( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )', ()=>{
    expect(evaluate('( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )')).toBe(101);
});

test('evaluate (1 + sqrt ( 4 ) )', ()=>{
    expect(evaluate('( 1 + sqrt ( 4 ) )')).toEqual(3);
});

test('Stack', ()=>{
    let a = {};
    const stack = new Stack();
    stack.push(a);
    expect(stack.size()).toEqual(1);
    const b = stack.pop();
    expect(stack.size()).toEqual(0);
    expect(b).toEqual(a);
});
