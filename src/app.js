const express = require("express")
require("./db/conn")
const app = express()
const Student = require("./models/students")
const port=process.env.PORT || 5000

app.use(express.json())

const studentRouter = require("./router/student")
app.use(studentRouter)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log('http://localhost:'+port)
})