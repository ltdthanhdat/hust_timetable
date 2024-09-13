
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const downloadFile = (req, res) => {
    const filePath = path.join(__dirname, '..', 'output.csv');
    res.download(filePath)
}

export default downloadFile