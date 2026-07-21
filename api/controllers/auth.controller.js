import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 12)
        console.log(hashedPassword)

        // [Тут в будущем будет сохранение в базу данных]

        return res.status(201).json({ 
            message: "Пользователь успешно зарегистрирован!" 
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