import fs from 'fs'
import crawData from '../utils/crawData.js'
import convertToCsv from '../utils/convertToCsv.js'
import convertToEvent from '../utils/convertToEvent.js'

const eventCalendar = async (req, res) => {
	const rawData = await crawData(req.body.aspNetCookies.trim())
	const data = convertToCsv(rawData)
	res.send(convertToEvent(data))
}

const exportCsv = async (req, res) => {
	const rawData = await crawData(req.body.aspNetCookies.trim())
	const data = convertToCsv(rawData)
	if (data == '') {
		fs.writeFileSync("output.csv", '', 'utf-8');
		res.send('no data')
	}
	else {
		const csvString = data.map(row => row.join(',')).join('\n');
		fs.writeFileSync("output.csv", csvString, 'utf-8');
		res.send("ok")
	}
}

export default { eventCalendar, exportCsv }
