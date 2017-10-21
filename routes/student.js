var express= require("express");
var rout = express.Router();

rout.post('/sregister',function(req,res){
   // console.log("I am in student")
var user=req.body.sid;
var pswrd=req.body.spwd;
const userOperations =  require("../db/addstudent.js");
const User = require("../helpers/User.js");
const userObject = new User(user,pswrd);
userOperations.add(userObject,res);

})

rout.post('/slogin',function(req,res){
    //console.log("I am in teacher")
var user=req.body.sid;
var pswrd=req.body.spwd;
const userOperations =  require("../db/addstudent.js");
const User = require("../helpers/User.js");
const userObject = new User(user,pswrd);
userOperations.search(userObject,res,req);
//console.log(req);

})

rout.get('/abcd',function(req,res){
    //console.log("I am in teacher")

const userOperations =  require("../db/addstudent.js");
const Qstn = require("../helpers/qstn.js");
const userObject = new Qstn;
userOperations.call(userObject,res);

})

// rout.get('/starttest',function(req,res){
//     //console.log("I am in teacher")
// const userOperations =  require("../db/addstudent.js");

// userOperations.find(res);

// })
module.exports=rout;