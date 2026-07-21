import express from 'express'
import authRouter from './routes/auth.route.js'

const app = express()

app.use(express.json()) 

app.use('/api/auth', authRouter)

const PORT = 8800
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`)
})
