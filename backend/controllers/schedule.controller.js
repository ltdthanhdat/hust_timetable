import fs from 'fs'
import crawData from '../utils/crawData.js'
import convertToCsv from '../utils/convertToCsv.js'
import convertToEvent from '../utils/convertToEvent.js'
const htmlTable = async (req, res) => {
    // console.log(req.body.aspNetCookies)
    const data = await crawData(req.body.aspNetCookies)
    res.send(data)
}

const eventCalendar = async (req, res) => {
    const rawData = await crawData(req.body.aspNetCookies)
    const data = convertToCsv(rawData)
    res.send(convertToEvent(data))
}

const csvTemplate = async (req, res) => {
    const data = await crawData(req.body.aspNetCookies)
    res.send(convertToCsv(data))
}

const exportCsv = async (req, res) => {
    const rawData = await crawData(req.body.aspNetCookies)
    const data = convertToCsv(rawData)
    const csvString = data.map(row => row.join(',')).join('\n');
    fs.writeFileSync("output.csv", csvString, 'utf-8');
    res.send("ok")
}

export default { htmlTable, eventCalendar, csvTemplate, exportCsv }