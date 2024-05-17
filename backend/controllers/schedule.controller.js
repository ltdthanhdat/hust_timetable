import crawData from '../utils/crawData.js'
import convertToCsv from '../utils/convertToCsv.js'
import convertToEvent from '../utils/convertToEvent.js'
const htmlTable = async (req, res) => {
    const data = await crawData()
    res.send(data)
}

const eventCalendar = async (req, res) => {
    const rawData = await crawData()
    const data = convertToCsv(rawData)
    res.send(convertToEvent(data))
}

const csvTemplate = async (req, res) => {
    const data = await crawData()
    res.send(convertToCsv(data))
}


export default { htmlTable, eventCalendar, csvTemplate }