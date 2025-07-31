require('dotenv').config(); 

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const URL = process.env.MONGO_URI
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT 

mongoose.connect(URL).then(() => {
    console.log('db connect')

})



const userRouter = require("./route/userroute")

app.use("/api", userRouter)


app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, (req, res) => {
    console.log(`the port is connected to ${PORT}`)


})
