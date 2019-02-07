function fizzBuzz(n) {
    let answer;
    const BUZZ = 5;
    const FIZZ = 3;

    if ((n % FIZZ) == 0) {
        answer = 'Fizz';
    }
    if ((n % BUZZ) == 0) {
        answer = 'Buzz';
    }
    if((n % BUZZ == 0 ) && (n % FIZZ == 0))
    {
        answer = 'FizzBuzz';
    }
    else{
        answer = n;
    }
    return answer;
    
}

console.log(fizzBuzz(15));