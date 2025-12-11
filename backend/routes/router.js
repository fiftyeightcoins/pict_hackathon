const express=require('express')
const path=require('path')
const users=require('../models/users')
const router=express.Router()

router.get('/',(req,res)=>{

    if(req.url=='/'){
        res.sendFile(
            path.join(__dirname,'..','..','frontend','public','home.html')
        )      
    }
        
})

router.post('/signup',async (req,res)=>{
    const {
        name,
        email,
        password
    }=req.body

    try{
        const userAlreadExist=await users.findOne({email})

        if(userAlreadExist){
            res.send('user already exist')
        }else{
            const user=new users({
                name,
                email,
                password
            })
            await user.save()
            console.log("user has been created")
            res.send(user,201)
        }

    }catch(err){
        console.log(err)
    }
})


router.get('/listusers',async (req,res)=>{
    try{
        const userss=await users.find()
        res.send(userss,200)
    }catch(err){
        console.log(err)
    }
})


router.post('/login',async (req,res)=>{
    const {
        email,
        password
    }=req.body

    try{
        const user=await users.findOne({email})
        if(user){
            if(password==user.password){
                res.send(user,200)
            }else{
                res.send('wrong password')
            }
        }else{
            res.send('user not found')
        }
    }catch(err){
        console.log(err)
    }
})



//ml thing

//import path from "path";
const {exec}=require("child_process");
const {stdout}=require("process");

const pythonfilepath=path.join(__dirname, "../../ml/ml_model.py");



router.get('/ml',(req,res)=>{

    
        exec(`python3 ${pythonfilepath}`,(err,stdout)=>{
            if(err){
                console.log(err)
                res.status(401).send(`ml is not working: ${err}`)
            }else{
                console.log(stdout)
                res.status(201).send(stdout)
                const dataFromml=JSON.parse(stdout.toString())
                console.log(dataFromml)
            }
        })
    


})

module.exports=router
