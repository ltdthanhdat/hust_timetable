import express from 'express'
import crawData from './utils/crawData.js'
import schedule from './controllers/schedule.controller.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(cors())
app.get('/html-table', schedule.htmlTable)
app.get('/csv-template', schedule.csvTemplate)
app.get('/event-calendar', schedule.eventCalendar)

app.listen(PORT)