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


export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        // check if the user exists
        const user = await prisma.user.findUnique({
            where: { username }
        });

        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        // check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

        // generate cookie and send it to the user

        return res.status(200).json({ message: "Login successful" }); // <-- this was missing
    }
    catch (err) {
        console.error(err); // <-- fixed typo
        return res.status(500).json({ message: "Failed to login!" });
    }
}

export const logout = (req, res) => {
    // db operations 
}