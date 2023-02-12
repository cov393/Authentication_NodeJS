const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/students-api",{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log("Connection is successful")
}).catch((e)=>{
    console.log("No connection")
})