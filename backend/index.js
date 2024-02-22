const express = require('express')
const puppeteer = require('puppeteer')
const crawData = require('./controllers/crawData')
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    (async () => {
        const content = await crawData()
        await res.send(content)
    })()
})

app.listen(PORT)