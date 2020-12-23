function fizzBuzz(num) {
    const result = [];

    if (num % 3 === 0) {
        result.push('Fizz')
    }
    if (num % 5 === 0) {
        result.push('Buzz')
    }
    if (num % 15 === 0) {
        result.push('FizzBuzz')
    }


    console.log(result);
    return result
};


module.exports = fizzBuzz