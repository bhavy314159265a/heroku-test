var express = require("express");
var bodyParser = require("body-parser")
const ejs = require("ejs");

 const session=require("express-session");
 const cookieParser = require('cookie-parser');

var app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(session({

  secret: 'bolna aunty aaun kya',

  	cookie: { secure: false,maxAge: 60000*1 }  // 1 min session

}));

app.use(cookieParser());

app.use(bodyParser.urlencoded({
        extended: false
    }))
    // parse application/json
app.use(bodyParser.json());


const dash = require("./routes/teacher.js");
app.use('/', dash);

const student = require("./routes/student.js")
app.use('/', student);

app.listen("1234", function() {
    console.log("SErver start")
})