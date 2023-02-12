const express = require("express")
require("./db/conn")
const app = express()
const Student = require("./models/students")
const port=process.env.PORT || 5000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/students",async(req,res)=>{
    try{
        // console.log(req.body)
        const user = new Student(req.body) 
        const createUser = await user.save()
        res.status(201).send(createUser)
        // res.send("Hello User")
    }catch(e){
        res.status(400).send('Cached Error')
    }
})


app.listen(port,()=>{
    console.log('http://localhost:'+port)
})