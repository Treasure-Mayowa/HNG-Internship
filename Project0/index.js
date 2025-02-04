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


app.get('/', (req, res) => {
    result = {
        "email": "treasuremayowa07@gmail.com",
        "current_datetime": new Date().toISOString(),
        "github_url": "https://github.com/Treasure-Mayowa/HNG-Internship"
    }
    res.json(result)
})
