const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")
const taskRoutes = require("./routes/taskRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/internTask")
.then(()=>console.log("MongoDB connected"))

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/tasks", taskRoutes)

app.listen(5000,()=>{
console.log("Server running on port 5000")
})