var express = require('express')
 var mysql = require('mysql');

var app = express()
console.log('hello')
//app.set('view engine', 'html');

app.use(express.static('static'))


var connection = mysql.createConnection({
   host: 'anketa.cpftu5bvza76.us-east-1.rds.amazonaws.com',
   user: 'root',
   password: 'Conclusion25',
   database: 'anketa'
 });

 connection.connect();

app.get('/', function (req, res) {
  res.render('health');
 
})

app.get('/goodbye', function(req, res){
  res.send('Goodbye World')
})

 app.get('/test_mysql_connection', function(req,res){
  

  
   connection.query('select ime from `anketa`.Clenovi where ID=4', function (error, results, fields) {
     if (error){
       res.statusCode = 500;
       res.send(error);
     }
     res.send(results);
   });
 })

 
 app.listen(8081)