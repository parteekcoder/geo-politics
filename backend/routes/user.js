
const express=require('express');
const router=express.Router();
const {getAllUsers,getUser,createUser} = require('../controller/user');
router.get('/',getAllUsers);
router.post('/register',createUser);
router.get('/login',getUser);

module.exports= router;