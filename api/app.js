import express from 'express'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import 'dotenv/config'; 

const app = express()

app.use(cookieParser())
app.use(express.json()) 

app.use('/api/auth', authRouter)

const PORT = 8800
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`)
})


// API BRANCH INIT