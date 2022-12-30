const Blog= require('../models/Blog');

const createBlog=async(req,res,next)=>{
    try {
        const created= await Blog.create({...req.body,user_:req.user.id});
        res.status(200).json(created)
    } catch (error) {
        next(error)
        
    }
}

const getAllBlogs=async(req,res,next)=>{
    try {
        const allBlogs= await Blog.find({user_:req.params.id});
        res.status(200).json(allBlogs)
    } catch (error) {
        // console.log(error)
        next(error);
    }
}

const likeBlog=async(req,res,next)=>{
    try {
        const blog=await Blog.findByIdAndUpdate(req.params.blogid,{$inc:{"likes":1}},{new:true});
        res.status(200).json(blog);
    } catch (error) {
        next(error)
    }
}

module.exports= {createBlog,getAllBlogs,likeBlog}