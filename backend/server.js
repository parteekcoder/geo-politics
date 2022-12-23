const express=require('express');
const userRoute=require('./routes/user.js');
const blogRoute=require('./routes/blog')
const app=express();
const cookieParser = require('cookie-parser');  
const connect=require('./db/connection');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use('/user',userRoute);
app.use('/blogs',blogRoute);

app.use((err,req,res,next)=>{
    const errorStatus=err.status||500;
    const  errorMeg=err.message||"Something went wrong";

    return res.status(errorStatus).json({
        status:errorStatus,
        success:false,
        message:errorMeg,
        stack:err.stack
    });
})

connect(()=>{
    app.listen(5000,()=>{
        console.log('server started at 5000....')
    })
})