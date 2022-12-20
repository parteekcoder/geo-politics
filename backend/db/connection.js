const mongoose=require('mongoose');

const connect=async(callBackFunc)=>{
    try {
       await mongoose.connect('mongodb://localhost:27017');
       console.log('connected');
       return callBackFunc();
    } catch (error) {
        console.log(error);
        
    }
}
module.exports= connect;