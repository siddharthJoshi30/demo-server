const express=require('express')
const models=require('../db/db')

const router=express.Router()

router.post('/user',async(req,res)=>{
    try{
        const user_entry=await models.user.create({
            name:req.body.name,
            email:req.body.email,
            contactNumber:req.body.contactNumber,
            address:req.body.address,
            dateofBirth:req.body.dateofBirth,
            bloodGroup:req.body.bloodGroup
        })
        return res.send(user_entry)
    }catch(e){console.log(e);}

    
})

module.exports=router