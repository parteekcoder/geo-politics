const User=require('../models/User.js');
const jwt=require('jsonwebtoken')
const getAllUsers=async(req,res,next)=>{
    try {
        const users= await User.find();
        res.status(200).json(users);
    } catch (error) {
        // console.log(error)
        next(error)
    }
}
const login=async(req,res,next)=>{
    try {
        const users= await User.findOne({email:req.body.email});

        if(!users || !(req.body.password=== users.password)){
            return res.status(400).json({"data":"you are not authenticated"});
        }
        const token=jwt.sign({id:users._id,email:users.email},'secret');
        res.cookie('access',token,{httpOnly:true}).status(200).json(users);
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

const createUser=async(req,res,next)=>{
    try {
        const user= await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

module.exports={createUser,getAllUsers,login};