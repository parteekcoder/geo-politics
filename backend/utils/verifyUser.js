
const jwt=require('jsonwebtoken');
const createError=require('./error')
const verifyToken=(req,res,next)=>{

    const token=req.cookies.access;
    if(!token) return next(createError(401,"You are not authorized"));

    jwt.verify(token,'secret'/*secret string*/,(error,user)=>{
        if(error) return next(createError(401,"you are not authenticated"));

        req.user=user;
        next();
    } )
}
const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{

        if(req.user.id===req.params.id){
            next();
        }else{
            return next(createError(401,'you are not authorized'));
        }
    })
}

module.exports={verifyUser};