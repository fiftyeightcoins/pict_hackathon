const mongoose=require('mongoose')
//const users=require('../models/users')

// mongoose.connect('mongodb://localhost:27017/mydbase',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log("mongo db wiht the name mydbase is connected")

// }).catch((err)=>{
//     console.log("the mongobd connection failed")
//     console.log(err)
// })


const mongoConnect = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/mydbase')
        console.log("mongo db wiht the name mydbase is connected")
    }catch(err){
        console.log("the mongobd connection failed")
        console.log(err)
    }
}


module.exports=mongoConnect