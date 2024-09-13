import { transpose } from "mathjs"
const csvTemplate = (arr) => {
    if (!arr[0]) {
        return ''
    }
    else {
        let table = []
        let header = [[['Subject', 'Start Date', 'Start Time', 'End Date', 'End Time', 'Description', 'Location']]]
        let firstWeek = "2024-9-2"
        let i = 1
        while (i != arr.length) {
            let day = convertDayToNum(arr[i][0].split(',')[0])
            let startDate = handleStartDate(arr[i][1].split(',')).map(item => weekToDate(item, day, firstWeek))
            let subject = Array(startDate.length).fill(`"${arr[i][7]}"`)
            let startTime = Array(startDate.length).fill(handleTime(arr[i][0].split(',')[1], 0))
            let endDate = startDate
            let endTime = Array(startDate.length).fill(handleTime(arr[i][0].split(',')[1], 1))
            let des = Array(startDate.length).fill(`"${arr[i][8] + " " + arr[i][5]}"`)
            console.log(0, arr[i])
            console.log(1, arr[i][8])
            console.log(2, arr[i][5])
            let loc = Array(startDate.length).fill(`"${arr[i][2]}"`)
            i = i + 1
            let row = [subject, startDate, startTime, endDate, endTime, des, loc]
            if (startDate.length != 0) {
                table.push(row)
            }
        }

        let result = header.concat(table.map(item => [].concat(transpose(item))))
        return result.flat()
    }
}

const handleStartDate = (arr) => {
    // ["28", "25-28"] -> ["28-28", "25-28"]
    let tempArr = arr.map(item => item.includes('-') ? item : `${parseInt(item)}-${parseInt(item)}`)
    // ["28-28", "25-28"] -> ["28", "25", "28"]
    let output = tempArr.map(item => generateRange(item))
    return [].concat(...output)
}

const generateRange = (string) => {
    let result = []
    const [start, end] = string.split('-').map(Number)
    for (let i = start; i <= end; i++) {
        result.push(`${i}`)
    }
    return result
}
// 15h5 - 17h30
const handleTime = (strTime, isEnd) => {
    let output = ""
    let tempOut = ""
    try {
        tempOut = strTime.split('-').map(item => item.replace('h', ':').trim())[isEnd]
        output = tempOut.split(':')[0] + ':' + tempOut.split(':')[1].padStart(2, "0")
        return output
    }
    catch {
        // output = ""
        return ''
    }
    // return output
}

const weekToDate = (weeks, day, firstWeek) => {
    let result = new Date(firstWeek)
    result.setDate(result.getDate() + (parseInt(weeks) - 1) * 7 + (parseInt(day) - 2))
    return `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
}

const convertDayToNum = (str) => {
    const arrDay = str.match(/\d+/g)
    if (arrDay) {
        return str.match(/\d+/g)[0]
    }
    return 1
}

export default csvTemplate