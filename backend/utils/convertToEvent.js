const convertToEvent = (csvData) => {
    const events = []

    for (let i = 1; i < csvData.length; i++) {
        const event = {}
        event["title"] = csvData[i][0]
        event["start"] = csvData[i][0]
        event["start"] = handleDateTime(csvData[i][1], csvData[i][2])
        event["end"] = handleDateTime(csvData[i][3], csvData[i][4])
        events.push(event)
    }

    return events
}
const handleDateTime = (date, time) => {
    const year = date.split('/')[2]
    const monthIndex = date.split('/')[1] - 1
    const day = date.split('/')[0]
    const hours = time.split(':')[0]
    const minutes = time.split(':')[1]
    return new Date(year, monthIndex, day, hours, minutes)
}
export default convertToEvent