import express from 'express'
import schedule from './controllers/schedule.controller.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.post('/html-table', schedule.htmlTable)
app.post('/csv-template', schedule.csvTemplate)
app.post('/event-calendar', schedule.eventCalendar)
app.post('/export-to-csv', schedule.exportCsv)

app.listen(PORT)
