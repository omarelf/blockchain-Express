const  express = require('express')
const  bodyParser =require("body-parser") ;
const blockRouter =require('./routes/index'); 

const app = express();

app.use(bodyParser("json"));

app.use('/api',blockRouter);

app.listen(1234,()=>{ 
    console.log('listenning')
})