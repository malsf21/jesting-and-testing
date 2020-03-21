const hw = require("./hw-math")

describe('zero function', () => {
    test('outputs zero', () => {
        expect(hw.zero()).toBe(0)
        expect(hw.zero(1)).toBe(0)
    })
})

describe('factorial function', () => {
    test('works on small whole numbers', () => {
        expect(hw.factorial(2)).toBe(2)
        expect(hw.factorial(3)).toBe(6)
        expect(hw.factorial(4)).toBe(24)
        expect(hw.factorial(5)).toBe(120)
    })

    test('works on medium-size whole numbers', () => {
        expect(hw.factorial(14)).toBe(87178291200)
        expect(hw.factorial(15)).toBe(1307674368000)
        expect(hw.factorial(20)).toBe(2432902008176640000) // might break JS Number
    })

    test('factorial of 1 is 1', () => {
        expect(hw.factorial(1)).toBe(1)
    })  

    test('factorial of 0 is 1', () => {
        // refer to https://www.quora.com/Why-does-zero-factorial-0-equal-one-1-1
        expect(hw.factorial(0)).toBe(1)
    })  

    test('gracefully fails on NaN', () => {
        expect(hw.factorial("wow")).toBe(NaN)
        expect(hw.factorial(NaN)).toBe(NaN)
    })
})

describe('prime number checking function', () => {
    
    let easyCases = [
        [0, false],
        [1, false],
        [2, true],
        [3, true],
        [4, false],
        [5, true],
        [6, false],
        [7, true],
        [8, false],
        [9, false]
    ];
    test.each(easyCases)('for %i, returns %p', (n, expected) => {
        expect(hw.isPrime(n)).toBe(expected);
    });

    test('works correctly on medium-sized numbers', () => {
        expect(hw.isPrime(111)).toBe(false)
        expect(hw.isPrime(435)).toBe(false)
        expect(hw.isPrime(661)).toBe(true)
        expect(hw.isPrime(607)).toBe(true)
    })

    test('works correctly on large-ish numbers', () => {
        expect(hw.isPrime(6453)).toBe(false)
        expect(hw.isPrime(6039)).toBe(false)
        expect(hw.isPrime(6907)).toBe(true)
        expect(hw.isPrime(7883)).toBe(true)
    })

    test('works correctly, doesn\'t hang on big numbers', () => {
        // https://en.wikipedia.org/wiki/List_of_prime_numbers#Lists_of_primes_by_type
        expect(hw.isPrime(16769023)).toBe(true)
        expect(hw.isPrime(1046527)).toBe(true)
    })

    test('gracefully fails on NaN', () => {
        expect(hw.isPrime("wow")).toBe(false)
        expect(hw.isPrime(NaN)).toBe(false)
    })

    // lol javascript is not good enough to do this
    // let wayTooBigNumbers = [
    //     1125899839733759, 
    //     35742549198872617291353508656626642567, 
    //     265252859812191058636308479999999, 
    //     10888869450418352160768000001, 
    //     1066340417491710595814572169
    // ]

    // test.each(wayTooBigNumbers)('works on the huge prime %i', n => {
    //     expect(hw.isPrime(n)).toBe(true);
    // }, 10000);
})