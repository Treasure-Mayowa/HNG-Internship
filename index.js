const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: '*',
    methods: 'GET',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const hostname = process.env.HOSTNAME 
const port = process.env.PORT 

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

const isPerfectNumber = (n) => {

    if (!Number.isInteger(n) || n <= 0) {
        console.log("Please provide a valid positive integer.");
        return false;
    }
    
    // Start with 1 as all numbers have 1 as a divisor
    let sum = 1;

    // Loop to find proper divisors
    // and calculate the sum
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }

    // Check if the sum of proper divisors
    // equals the original number
    const isPerfect = sum === n;

    // Output the result
    if (isPerfect) {
        console.log(`${n} is a perfect number.`);
    } else {
        console.log(`${n} is not a perfect number.`);
    }

    return isPerfect;
}

const digitSum = (n) => {
    return n
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0)
}


app.get('/api/classify-number/', async (req, res) => {
    
    const number = parseInt(req.query.number, 10)

    if (isNaN(number)) {
        res.status(400).json({
            "number": "alphabet",
            "error": true
        })
    }
    const properties = []
    number % 2 === 0? properties.push("even") : properties.push("odd")
    try {
        const response = await fetch(`http://numbersapi.com/${number}`);
        const data = await response.text()
    result = {
        "number": number,
        "is_prime": isPrime(number),
        "is_perfect": isPerfectNumber(number),
        "properties": properties,
        "digit_sum": digitSum(number),
        "fun_fact": data, 
    }
    res.json(result)
} catch(error) {
    res.status(500).json({
        "error": true,
        "message": error.message
    })
}
})
