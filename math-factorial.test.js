const hw = require("./hw-math")

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