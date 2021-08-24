'use strict'
const express=require('express')
 const router=express.Router()
 const basicAuth=require('../middelware/basicAuth')
const {users}=require('../models/index')
 router.post('/sginup',sginUp)
 router.post('/sginin',basicAuth(users),siginIn)

  async function  sginUp (req,res)
{ console.log(req.body)
    const record=await users.create({
        username : req.body.username,
        password: req.body.password
    });
    res.json(record);
   
}


async function siginIn(req,res){
    res.status(200).send(req.user)

}
module.exports=router