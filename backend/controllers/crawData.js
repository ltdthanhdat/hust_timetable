const puppeteer = require('puppeteer')

const crawData = async () => {
    const browser = await puppeteer.launch({ headless: true })
    const cookies = {
        name: ".AspNet.Cookies",
        value: "NqW2534wox5IxmhlM1FG1rVH7_OGdlnjmsr3Y-fFjy_OvhFTUMp_4NB7cT9_YUoEwwvIFeSE_vbeWd8viIg05frGfsgO9cYy0A-waJqUIkz1mOTc7vjkIpBtROP9O5K_OG2-1vIOMhQOpSRjw6kTd8eNQfZvXYCu7NLTu26EPuapLluCjRJi89-LsW7cmVEL3Hbk966VAcP0joaqrpYQ0xUacQST_-TLidyd3MK-YqUZk_fFzegj3WCNrBUTF4dvBXd97Mej9qkwYhtlb_z27P177FsWjoIhVHlI6-908kTiSZspi1VhhLplOFFcw0nz_u5BTQPXLDUnWQ1T7XGd5Cwarg4cybyqu1Uf8SRnik1Xj5GB5zFkC6qQKaeSMp4pjLhl3SLj3B2RMcXNPrhbHz59ZdI6rBeNPPLxa4vp1aCmkxlj-evv5pO3GjJUjkMuQX6fjHXvTYlxiA8KZxr2WFQVo_9RbDamIU26uOnLC4SUU53aKtPJVpVMFegGBqnB-_hXMpr0mI_xjsdcOgOP9qrKQZS5F2fXdJXTaTH6VwP_NIQHYx1xtYhYxyK_vUVOSDSPXpKg4tOTkFAUM7rnRg",
        domain: "dt-ctt.hust.edu.vn"
    }
    const page = await browser.newPage()
    await page.setCookie(cookies)

    await page.goto('https://dt-ctt.hust.edu.vn/Students/Timetables.aspx', { waitUntil: 'networkidle2' })

    const content = await page.content()

    const elementWithId = await page.$('#ctl00_ctl00_contentPane_MainPanel_MainContent_gvStudentRegister_DXMainTable');
    if (elementWithId) {
        const textContent = await page.evaluate(element => element.innerHTML, elementWithId);
        // console.log('Text content of element with ID:', textContent);
        return textContent

    }
    // console.log(timeTable)
    // if (elementWithClass) {
    //     const textContent = await page.evaluate(element => element.textContent, elementWithClass);
    //     console.log('Text content of element with class:', textContent);
    // }

    return textContent
}

module.exports = crawData
