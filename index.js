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
        if(num % i === 0) return false
    }
    return num > 1
}

const isPerfectNumber = (n) => {
    if (!Number.isInteger(n) || n <= 0) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i;
        }
    }
    return sum === n
}

const digitSum = (n) => {
    n = Math.abs(n)
    return n
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0)
}

const isArmstrong = (n) => {
    n = Math.abs(n)
    let digits = n.toString().split('')
    let power = digits.length
    let sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0)
    return sum === n
}

app.get('/', (req, res) => {
    return res.json({
        "message": "Welcome to Treasure's number classifier API"
    })
})

app.get('/api/', (req, res) => {
    return res.status(400).json({
        "error": true,
        "message": "Invalid path. Please visit /api/classify-number"
    })
})

app.get('/api/classify-number/', async (req, res) => {
    
    let n = req.query.number

    if (!n) {
        return res.status(400).json({
            "number": null,
            "error": true
        })
    } else if (isNaN(n)) {
        return res.status(400).json({
            "number": "alphabet",
            "error": true
        })
    } else if(n.trim() == "") {
        return res.status(400).json({
            "number": null,
            "error": true
        })
    } else if(n.includes(".")) {    
        return res.status(400).json({
            "number": "decimal", 
            "error": true
        })
    }
    const number = parseInt(n, 10)
    const properties = []
    isArmstrong(number)? properties.push("armstrong") : null    
    number % 2 === 0? properties.push("even") : properties.push("odd")
    try {
        const response = await fetch(`http://numbersapi.com/${number}/math`);
        const data = await response.text()
        const result = {
            "number": number,
            "is_prime": isPrime(number),
            "is_perfect": isPerfectNumber(number),
            "properties": properties,
            "digit_sum": digitSum(number),
            "fun_fact": data, 
        }
        return res.json(result)
    } catch(error) {
        if (!res.headersSent) {
            return res.status(500).json({
                "error": true,
                "message": error.message
            })
        }
    }
})
