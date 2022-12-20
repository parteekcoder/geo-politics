const express=require('express');
const userRoute=require('./routes/user.js');
const app=express();
const connect=require('./db/connection');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRoute);

connect(()=>{
    app.listen(5000,()=>{
        console.log('server started at 5000....')
    })
})