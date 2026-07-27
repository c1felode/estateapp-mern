import prisma from "../lib/prisma.js"

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        return res.status(200).json({message:"Users found successfuly", data:users})
    }
    catch (err) {
        console.error(err)
        return res.status(404).json({message:"Users not found"})
    }
}
export const getUser = async (req, res) => {
    const {id} = req.params
    try {
        const user = await prisma.user.findUnique({where:{id}})
        return res.status(200).json({message:"User found successfuly", data:user})
    }
    catch (err) {
        console.error(err)
        res.status(404).json({message:"User not found"})
    }
}
export const updateUser = (req, res) => {

}
export const deleteUser = (req, res) => {
    
}