const express=require('express')
const router=require('./routes/router')
const mongoConnect=require('./dbase/db')
const cors=require('cors')
const path=require('path')
const app=express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/public")));

app.use(router)
app.use(cors())

// app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, "public/static")));


mongoConnect()

app.listen(3004,()=>{
    console.log('backend on port 3004')
})