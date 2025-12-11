const express=require('express')
const router=require('./routes/router')
const mongoConnect=require('./dbase/db')
const cors=require('cors')
const app=express()


app.use(express.json())
app.use(router)
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

mongoConnect()


app.listen(3001,()=>{
    console.log('backend on port 3001')
})