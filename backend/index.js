const express = require('express')
const puppeteer = require('puppeteer')
const crawData = require('./controllers/crawData')
const arrCalendar = require('./controllers/convertToCalendarTemplate')
const arrToCSV = require('./controllers/arrToCSV')
const fs = require('fs')
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    (async () => {
        const content = await crawData()
        const arrData = await arrCalendar(content)
        const exportToCSV = await arrToCSV(arrData, 'output.csv')
        await res.send(arrData)
    })()
})

app.listen(PORT)