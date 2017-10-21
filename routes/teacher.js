var express= require("express");
var router = express.Router();

router.post('/tregister',function(req,res){
    //console.log("I am in teacher")
var user=req.body.tid;
var pswrd=req.body.tpwd;
const userOperations =  require("../db/addteacher.js");
const User = require("../helpers/User.js");
const userObject = new User(user,pswrd);
userOperations.add(userObject,res);

})


router.post('/tlogin',function(req,res){
    //console.log("I am in teacher")
var user=req.body.tid;
var pswrd=req.body.tpwd;
const userOperations =  require("../db/addteacher.js");
const User = require("../helpers/User.js");
const userObject = new User(user,pswrd);
userOperations.search(userObject,res);

})

router.get('/qadd',function(req,res){
console.log("i am adding question")
var qstn=req.query.question;
var ansr=req.query.answer;
const addqstn =  require("../db/addquestion.js");
const Qstn = require("../helpers/qstn.js");
const userObject = new Qstn(qstn,ansr);
addqstn.add(userObject,res);

})
// router.post("/complete",function(req,res){
	
// var ans = req.body.name
// })
    



module.exports=router;