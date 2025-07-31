const userModel = require("../model/userModel")
const userController = new Object()

userController.addUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body)
        if (user) {
            return { statusCode: 200, status: true, message: " user created successfully", data: user }
        }
        return { statusCode: 400, status: false, message: " failed to create user", data: {} }


    } catch (err) {
        console.log(err)
        return { statusCode: 500, status: false, message: " internal server error" }
    }
}
userController.getUser = async (req, res) => {
    try {
        const user = await userModel.find()
        if (user) {
            return { statusCode: 200, status: true, message: " user created successfully", data: user }
        }
        return { statusCode: 400, status: false, message: " failed to create user", data: {} }


    } catch (err) {
        console.log(err)
        return { statusCode: 500, status: false, message: " internal server error" }
    }
}
userController.updateUser = async (req, res) => {
    try {
        const userId = req.params.id
        const result = await userModel.findByIdAndUpdate(userId, req.body, { new: true })
        if (result) {
            return { statusCode: 200, status: true, message: " user created successfully", data: result }
        }
        return { statusCode: 400, status: false, message: " failed to create user", data: {} }


    } catch (err) {
        console.log(err)
        return { statusCode: 500, status: false, message: " internal server error" }
    }
}
userController.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const result = await userModel.findByIdAndDelete(userId)
        if (result) {
            return { statusCode: 200, status: true, message: " user Delete successfully", data: result }
        }
        return { statusCode: 400, status: false, message: " failed to delete user", data: {} }



    } catch (err) {
        console.log(err)
        return { statusCode: 500, status: false, message: " internal server error" }
    }
}



module.exports = userController