let zero = () => 0

let factorial = n => typeof n === "number" && !isNaN(n) ? factorialHelper(n, 1) : NaN

let factorialHelper = (n, accum) => n > 1 ? factorialHelper(n-1, n * accum) : accum

let isPrime = n => {
    if (n === 2){
        return true
    }
    if (typeof n !== "number" || isNaN(n) || n == 0 || n == 1 || n % 2 == 0){ 
        return false 
    }
    let primes = [2]
    for (let i = 3; i < Math.sqrt(n) + 1; i += 2){
        for (let prime in primes){
            if (i % prime == 0){ 
                break 
            }
        }
        primes.push(i)
        if (n % i == 0){
            return false
        }
    }
    return true
}

module.exports = {
    zero,
    factorial,
    isPrime
}