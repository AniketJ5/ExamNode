const express =  require('express');
const config = require('config');
const cors = require('cors');

const empsRelatedRoutes = require('./routes/emps');

 const mysql = require('mysql');
// console.log(express);

const app = express();
app.use(cors('*'))



app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})

app.use(express.json()); 


//app.use('/admin',adminRelatedRoutes)
app.use('/emps',empsRelatedRoutes)
;

app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
  })