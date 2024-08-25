// FizzBuzz


function isDivisibleBy(numerator, denominator) {
    return numerator % denominator === 0;
}

function fizzBuzz(number) {
    let fizz_string = '';
    let buzz_string = '';

    if (isDivisibleBy(numerator = number, denominator = 3)) {
        fizz_string = 'Fizz';
    }

    if (isDivisibleBy(numerator = number, denominator = 5)) {
        buzz_string = 'Buzz';
    }

    if (fizz_string == '' && buzz_string == '') {
        return number;
    } else {
        return `${fizz_string}${buzz_string}`;
    }
}

for (let n = 1; n <= 100; n++) {
    console.log(fizzBuzz(n))
}


