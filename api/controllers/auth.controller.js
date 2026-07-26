import bcrypt from 'bcrypt'
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        // get the user info from body
        const { username, email, password, avatar } = req.body

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 12)
        
        // save new user to db 
        const newUser = await prisma.user.create({
            data: {
                username, email, password:hashedPassword, avatar:!avatar ? null : avatar
            }
        })
        // response if ok
        return res.status(201).json({
            message: "Пользователь успешно зарегистрирован!",
        })


    // catch error
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Внутренняя ошибка сервера" })
    }
}


export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { username }
        });

        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        const isPasswordValid = await bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

        const age = 1000 * 3600 * 24 * 7 // 1 week age

        const token = jwt.sign({
            id: user.id
        }, process.env.JWT_SECRET_KEY, { expiresIn: age })

        return res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
            // secure:true
        }).status(200).json({ message: "Login successful" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to login!" });
    }
}

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({message:"Logout successful"})
}