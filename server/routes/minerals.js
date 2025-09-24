import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import mineralData from '../data/minerals.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(mineralData)
})

router.get('/:mineralId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/mineral.html'))
})

export default router