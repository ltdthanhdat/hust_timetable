const math = require("mathjs");

const arrCalendar = (arr) => {
    let table = []
    let header = [[['Subject', 'Start Date', 'Start Time', 'End Date', 'End Time', 'Description', 'Location']]]

    let i = 1
    while (i != arr.length) {

        let startDate = handleStartDate(arr[i][1].split(','))
        let subject = Array(startDate.length).fill(arr[i][7])
        let startTime = Array(startDate.length).fill(handleTime(arr[i][0].split(',')[1], 0))
        let endDate = startDate
        let endTime = Array(startDate.length).fill(handleTime(arr[i][0].split(',')[1], 1))
        let des = Array(startDate.length).fill(arr[i][8] + "|" + arr[i][5])
        let loc = Array(startDate.length).fill(arr[i][2])
        i = i + 1
        let row = [subject, startDate, startTime, endDate, endTime, des, loc]
        // console.log(startDate)
        // console.log()
        if (startDate.length != 0) {
            table.push(row)
        }
    }

    let result = header.concat(table.map(item => [].concat(math.transpose(item))))

    return result.flat()

}

const handleStartDate = (arr) => {
    // ["28", "25-28"] -> ["28-28", "25-28"]
    let tempArr = arr.map(item => item.includes('-') ? item : `${parseInt(item)}-${parseInt(item)}`)
    // ["28-28", "25-28"] -> ["28", "25", "28"]
    let output = tempArr.map(item => generateRange(item))
    return [].concat(...output)
}

const generateRange = (string) => {
    result = []
    const [start, end] = string.split('-').map(Number)
    for (let i = start; i <= end; i++) {
        result.push(`${i}`)
    }
    return result
}

const handleTime = (strTime, i) => {
    let output = ""
    try {
        output = strTime.split('-').map(item => item.replace('h', ':').trim())[i]
    }
    catch {
        output = ""
    }
    return output
}


module.exports = arrCalendar