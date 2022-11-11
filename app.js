require('dotenv').config();
const express = require('express');
const { SERVER_PORT } = process.env;
const  bodyParser = require("body-parser");
// var bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const urlencoded = bodyParser.urlencoded({
        extended:false
    });
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
// support parsing of application/json type post data
//app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({
//     extended:false
// }));
// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cors({
    orgin : ['www.google.com'],
    methods : ['GET','POST','DELETE','PUT']
}))

app.use('/',function(err,req,res,next){
    console.error(err.stack)
    console.log('eiei');
    next();
})
// app.use(function(req,res,next){
//     console.log('Time :' ,Date.now());
//     next();
// })

// app.use(function(req,res,next){
//     console.log('eieiei');
//     next();
// })

// app.use('/user/:id', function(req,res,next){
//     console.log('Request URL',req.originalUrl)
//     next();
// },function(req,res,next){
//     console.log('Request URL',req.method)
//     next();
// })
// app.get('/user/:id',function(req,res,next)
// {
//     res.end(req.params.id);
// })

// app.get('user/:id',function (req,res,next){
//     if(req.params.id === '0') next('route')
//     else next()
// },function (req,res,next){
//     res.send('regular');
// })

// app.get('/user/:id' ,function (req,res,next){
//     res.send('special')
// })

// function logOriginalUrl (req,res,next){
//     console.log('Request URL : ' ,req.logOriginalUrl)
//     next()
// }
// function logMethod (req,res,next){
//     console.log('Request URL : ' ,req.method)
//     next()
// }


// var logStuff = [logOriginalUrl,logMethod]
// app.get('/test/:id',logStuff,function(req,res,next){
//     res.send('User Info')
// })
// app.get('/',cors(),(req,res,next) => {

//     res.send('Hello world!');
// });

// app.get('/sum',(req,res) => {

//     let a = Number(req.query.a);
//     let b = Number(req.query.b);

//     res.send(`${a+b}`);
// });

// app.get('/sum/:a/:b',(req,res) => {

//     let a = Number(req.params.a);
//     let b = Number(req.params.b);

//     res.send(`${a+b}`);
// });

// app.post('/postNum',(req,res) =>{
//     let num1 = parseInt(req.body.num1);
//     let num2 = parseInt(req.body.num2);
      
//     let result = num1 + num2 ;
      
//     res.send("Addition - " + result);
// });

// app.post('/test',jsonParser,(req,res) =>{
//     console.log(req.body);
//     const data = JSON.stringify(req.body)
//     const obj =  JSON.parse(data)
//     res.send(obj.name);
// });

app.use('/api/employees',jsonParser, require('./api/employees'));




app.listen(SERVER_PORT ,()=>{
    console.log(`Listening at http://localhost:${SERVER_PORT}`);
});

