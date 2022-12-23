
const express=require('express');
const router=express.Router();
const {getAllUsers,login,createUser} = require('../controller/user');
router.get('/',getAllUsers);
router.post('/register',createUser);
router.get('/login',login);

module.exports= router;