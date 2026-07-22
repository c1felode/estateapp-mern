import bcrypt from 'bcrypt'
import prisma from "../lib/prisma.js"

export const register = async (req, res) => {
    try {
        const { username, email, password, avatar } = req.body

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = await prisma.user.create({
            data: {
                username, email, password:hashedPassword, avatar:!avatar ? null : avatar
            }
        })
        return res.status(201).json({
            message: "Пользователь успешно зарегистрирован!",
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Внутренняя ошибка сервера" })
    }
}


export const login = (req, res) => {
    // db operations
}

export const logout = (req, res) => {
    // db operations 
}