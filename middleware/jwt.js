// require('dotenv').config();
const jwt = require("jsonwebtoken");
// const { model } = require("mongoose");
const {TOKEN_KEY} = process.env;
const verifyToken = (req,res,next) =>{
    console.log(req.headers)
    const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["authorization"];
    if(!token){
        return res.status(403).send("A token is required for auth");

    }
    try{
        const decoded = jwt.verify(token,TOKEN_KEY);
        req.user = decoded;
    }catch(err)
    {
        console.log(err)
        return res.status(401).send("Invalid Token");
    }
    return  next();
}

module.exports = verifyToken;