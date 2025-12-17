const express=require('express')
const path=require('path')
const users=require('../models/users')
const router=express.Router()
const fs=require('fs')
const axios=require('axios')
const { stringify } = require('querystring')

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




router.get('/api/users',(req,res)=>{
    fs.readFile('./users.json','utf-8',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.json(JSON.parse(data))
        }
    })

})








//ml routes

// router.get('/ml',async (req,res)=>{
//     // const ress = await axios.post('http://localhost:5000/predict',{
//     //     data: 5000,
//     //     hour:3
//     // })
//     // res.send(ress.data)
//     // console.log(ress.data)

//     const amount=Number(req.query.amount)
//     const hour=Number(req.query.hour)
//     try{
//         const ress=await axios.post('http://localhost:5000/predict',{
//             amount,
//             hour
//         })
//         res.send(ress.data)
//         console.log(ress.data)
//     }catch(err){
//         console.log("FLASK ERROR:", err.response?.data);
//         res.status(500).json({ error: "ML failed" });
//     }
// })

router.get('/ml',(req,res)=>{
    res.sendFile(
        path.join(__dirname,'..','..','frontend','public','ml.html')
    )
})

router.post('/ml',async (req,res)=>{
    const amount=Number(req.body.amount)
    const hour=Number(req.body.hour)
    try{
        const ress=await axios.post('http://localhost:5000/predict',{
            amount,
            hour
        })
        
        // try{
        //     stirngRes=stringify(ress.data)
        //     res.send(stringRes)

        // }catch(err){
        //     console.log("bhai string m e convert krna nai ata kya json ko")
        // }

        //res.send(JSON.parse(ress.data))
        res.send(ress.data)
        console.log(ress.data)
    }catch(err){
        console.log("FLASK ERROR:", err.response?.data);
        res.status(500).json({ error: "ML failed" });
    }
})

router.get('/mlanalysis',(req,res)=>{
    
    try{
        res.sendFile(
            path.join(__dirname,'..','..','frontend','public','mlanalysis.html')
        )

    }catch(err){
        console.log(err)
    }
})
module.exports=router