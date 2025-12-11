//const express=require('express')
const { default: mongoose } = require('mongoose')

//const userDetails=new express.Router()

const userDetails=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
const users=mongoose.model('users',userDetails)
module.exports=users
