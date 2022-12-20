const User=require('../models/User.js');

const getAllUsers=async(req,res)=>{
    try {
        const users= await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
    }
}

const getUser=async(req,res)=>{
    try {
        const users= await User.findOne({email:req.body.email});

        if(!users || !(req.body.password=== users.password)){
            return res.status(400).json({"data":"you are not authenticated"});
        }
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
    }
}

const createUser=async(req,res)=>{
    try {
        const user= await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
    }
}

module.exports={createUser,getAllUsers,getUser};