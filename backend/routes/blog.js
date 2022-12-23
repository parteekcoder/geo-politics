
const express=require('express');
const router=express.Router();
const {verifyUser}=require('../utils/verifyUser');
const {createBlog,getAllBlogs} = require('../controller/blog');
router.get('/:id',verifyUser,getAllBlogs);
router.post('/:id',verifyUser,createBlog);

module.exports= router;