const express = require('express')
const puppeteer = require('puppeteer')
const crawData = require('./controllers/crawData')
const arrCalendar = require('./controllers/convertToCalendarTemplate')
const fs = require('fs')
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    (async () => {
        const content = await crawData()
        const csvData = await arrCalendar(content)

        arrayToCsv = (arr, filePath) => {
            // Convert the array to a CSV string
            const csvString = arr.map(row => row.join(',')).join('\n');
            // Write the CSV string to a file
            fs.writeFileSync(filePath, csvString, 'utf-8');
        }

        arrayToCsv(csvData, 'output.csv');

        await res.send(csvData)
    })()
})

app.listen(PORT)