const userController = require("../controller/userController")
const express = require("express")
const userRouter = express.Router()


userRouter.post("/users",async(req,res)=>{
    try{
        const result = await userController . addUser(req)
        res.send(result)
    }catch(err){
        console.log(err)
    }
})

userRouter.get("/users",async(req,res)=>{
    try {
        const result = await userController . getUser(req)
        res.send(result)
    } catch (err) {
        console.log(err)
        
    }
  
})
  userRouter.put("/:id",async(req,res)=>{
        
    try {
        const result = await userController . updateUser(req)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
    })
    userRouter.delete("/:id",async(req,res)=>{
        try {
            
            const result = await userController . deleteUser(req)
            res.send(result)
        } catch (err) {
            console.log(err)
        }
    })
module.exports =userRouter