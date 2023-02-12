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

app.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find()
        res.send(studentsData)
    }catch(e){
        res.send(e)
    }
})

// GET the individual Student data using id

app.get("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const studentData = await Student.findById(_id)
        if(!studentData){
            return res.status(404).send('Unable to login')
        }else{
            res.send(studentData)
        }
    }catch(e){
        res.status(500).send(e)
    }
})


app.listen(port,()=>{
    console.log('http://localhost:'+port)
})