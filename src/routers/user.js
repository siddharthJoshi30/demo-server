const express=require('express')
const models=require('../db/db')
const checkUser=require('../middleware/create_user')
const router=express.Router()
router.get('/home',checkUser,async(req,res)=>{
    return res.send("Hello world")

})
router.post('/user',checkUser,async(req,res)=>{
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