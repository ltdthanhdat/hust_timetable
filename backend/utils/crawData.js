import puppeteer from 'puppeteer'
import dotenv from 'dotenv'
dotenv.config()

const crawData = async (aspNetCookies) => {
    const browser = await puppeteer.launch({ headless: true })
    const cookies = {
        name: ".AspNet.Cookies",
        value: aspNetCookies,
        domain: "dt-ctt.hust.edu.vn"
    }
    const page = await browser.newPage()
    await page.setCookie(cookies)
    await page.goto('https://dt-ctt.hust.edu.vn/Students/Timetables.aspx', { waitUntil: 'networkidle2' })
    const table = getHtmlTable(page)
    return table
}

const getHtmlTable = async (page) => {
    let table = []
    // handle header
    const headerHtml = await page.$(`#ctl00_ctl00_contentPane_MainPanel_MainContent_gvStudentRegister_DXHeadersRow0`)
    const header = await page.evaluate(element => element.innerText, headerHtml)
    table.push(header.split("\n\t\n").map(item => item.replace(/^\s+|\s+$/gm, '')))

    // handle data
    try {
        let i = 0
        while (true) {
            const elementWithId = await page.$(`#ctl00_ctl00_contentPane_MainPanel_MainContent_gvStudentRegister_DXDataRow${i}`)
            const row = await page.evaluate(element => element.innerText, elementWithId)
            table.push(row.split('\t'))
            i = i + 1
        }
    }
    catch {
        return table
    }
}

export default crawData
