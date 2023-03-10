const express = require("express")
const router = new express.Router()
const Student = require("../models/students")

router.post("/students",async(req,res)=>{
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

// GET all student data
router.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find()
        res.send(studentsData)
    }catch(e){
        res.send(e)
    }
})

// GET the individual Student data using id

router.get("/students/:id",async(req,res)=>{
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

// Update the Students by it id

router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(updateStudent)
    }catch(e){
        res.status(400).send(e)
    }
})

// Delete the student by it id
router.delete("/students/:id",async(req,res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deleteStudent)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router