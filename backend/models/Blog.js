const mongoose=require('mongoose')
const Blog=new mongoose.Schema({
    user_:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports= mongoose.model('Blog',Blog);