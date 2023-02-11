const express = require("express")
const app = express()
const port=process.env.PORT || 5000


app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/students",(req,res)=>{
    res.send("")
})


app.listen(port,()=>{
    console.log('http://localhost:'+port)
})