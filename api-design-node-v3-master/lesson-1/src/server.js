import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

router.get('/me', (req, res) => {
    res.send({ message: 'hello' })
})
router.route('/cat').get().post()
router.route('/cat/:id').get().put().delete()
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = ('/data', (req, res, next) => {
    console.log('logging')
    next()
})
app.get('/data', (req, res) => {
    res.send({ data: [1, 2, 3] })
})
app.post('/data', (req, res) => {
    res.send(req.body)
})
export const start = () => {
    app.listen(3000, () => {
        console.log('server is on 3000')
    })
}
