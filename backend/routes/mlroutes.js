const express=require('express')
const path=require('path')
//const users=require('../models/users')
const router=express.Router()


// route.js or controller.js
import { exec } from "child_process";

const pythonPath = path.join(__dirname, "../../ml/python.py");


export const runModel = (req, res) => {
  exec(`python3 "${pythonPath}"`, (error, stdout) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Python error" });
    }

    try {
      const result = JSON.parse(stdout);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Invalid JSON from Python" });
    }
  });
};


router.get('/ml',(req,res)=>{
    if(req.url=='/ml'){
        runModel(req, res);

    }else{
        console.log("run failed")
    }
})



module.exports=runModel