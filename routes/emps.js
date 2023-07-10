const express =  require('express');


const appForEmps = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'manager',
    database : 'mysql'
   });



appForEmps.get("/", (request, response)=>{
    
    console.log("EMPS GET - Request Received...")
    connection.query("select * from Employee_Tb", (error, result)=>{
                if(error==null)
                {
                    var data = JSON.stringify(result) 
                    response.setHeader("Content-Type","application/json");
                    response.write(data);
                } 
                else
                {
                    console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
                }
                response.end();
    })

})


appForEmps.post("/", (request, response)=>{
   
    console.log("EMPS POST - Request Received...");
    console.log("Data Received is as below..")
    console.log(request.body)
    var query = 
    `insert into Employee_Tb values(${request.body.id}, '${request.body.e_name}','${request.body.email}','${request.body.password}','${request.body.emp_id}','${request.body.dname}','${request.body.doj}')`;

    connection.query(query, (error, result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result) 
            response.setHeader("Content-Type","application/json");
            response.write(data);
        } 
        else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error)
        }
        response.end();
})
})


appForEmps.put("/:id", (request, response)=>{
   
    console.log("EMPS PUT - Request Received...");
    console.log("Data Received is as below..")
    console.log(request.body)
    console.log(request.params)

    var query = 
    `update Emplyee_Tb set dname = '${request.body.dname}',
                    doj = '${request.body.doj}' where id = ${request.params.id}`;

    connection.query(query, (error, result)=>{
                        if(error==null)
                        {
                            var data = JSON.stringify(result) 
                            response.setHeader("Content-Type","application/json");
                            response.write(data);
                        } 
                        else
                        {
                            console.log(error);
                            response.setHeader("Content-Type","application/json");
                            response.write(error)
                        }
                        response.end();
                })
})


appForEmps.delete("/:doj", (request, response)=>{
   
    console.log("EMPS DELETE - Request Received...");
    console.log("Data Received is as below..")
    console.log(request.params)
    var query = 
    `delete from Employee_Tb where doj = ${request.params.doj}`;
                    
    connection.query(query, (error, result)=>{
                        if(error==null)
                        {
                            var data = JSON.stringify(result) 
                            response.setHeader("Content-Type","application/json");
                            response.write(data);
                        } 
                        else
                        {
                            console.log(error);
                            response.setHeader("Content-Type","application/json");
                            response.write(error)
                        }
                        response.end();
                })
})

module.exports = appForEmps;