const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let num1, num2;

app.use(bodyParser.urlencoded({
    extended: true
}));

var port = 5656;

app.listen(port, function(){
    console.log('Server is running on port: ' + port)
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    num1 = Number(req.body.num1);
    num2 = Number(req.body.num2);
    res.send(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
});