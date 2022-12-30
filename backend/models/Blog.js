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
    },
    likes:{
        type:Number,
        default:0
    }
},{timestamps:true});

module.exports= mongoose.model('Blog',Blog);