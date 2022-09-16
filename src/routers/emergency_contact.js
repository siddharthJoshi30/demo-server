const express=require('express')
const { emergency_contact } = require('../db/db')
const models=require('../db/db')
const router=express.Router()

router.post('/emergency_contact',async(req,res)=>{
    try{
        const emergency_contact=await models.emergency_contact.create({
            name:req.body.name,
            address:req.body.address,
            phoneNumber:req.body.phone_number

        })
        return res.send(emergency_contact)
    }catch(e){console.log(e);}
})

module.exports=router