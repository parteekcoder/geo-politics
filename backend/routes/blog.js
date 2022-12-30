
const express=require('express');
const router=express.Router();
const {verifyUser}=require('../utils/verifyUser');
const {createBlog,getAllBlogs,likeBlog} = require('../controller/blog');
router.get('/get/:id',verifyUser,getAllBlogs);
router.post('/post/:id',verifyUser,createBlog);
router.put('/like/:blogid',verifyUser,likeBlog);
module.exports= router;