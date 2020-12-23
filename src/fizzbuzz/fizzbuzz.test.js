const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
    test('Should return Fizz if num is divided by 3', () => {
        const result = fizzBuzz(3);
        expect(result).toEqual(["Fizz"]);
    });

    test('Should return Buzz if num is divided by 5', () => {
        const result = fizzBuzz(5);
        expect(result).toEqual(["Buzz"]);
    });

    test('Should return FizzBuzz if num is devided by 15', () => {
        const result = fizzBuzz(15);
        expect(result).toEqual(["FizzBuzz"]);
    });
});