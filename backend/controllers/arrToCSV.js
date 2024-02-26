const fs = require('fs')

const arrToCSV = (arr, filePath) => {
    // Convert the array to a CSV string
    const csvString = arr.map(row => row.join(',')).join('\n');
    // Write the CSV string to a file
    fs.writeFileSync(filePath, csvString, 'utf-8');
}

module.exports = arrToCSV