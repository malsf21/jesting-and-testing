const hw = require("./hw-math")

describe('zero function', () => {
    test('outputs zero', () => {
        expect(hw.zero()).toBe(0)
        expect(hw.zero(1)).toBe(0)
    })
})