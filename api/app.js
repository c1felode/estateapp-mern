import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import 'dotenv/config';

const app = express()


app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRouter)

const PORT = 8800
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`)
})


// API BRANCH INIT