var express = require('express');
var sql = require("mssql");
var app = express();

app.get('/', function (req, res) {
   
    
            sql.connect('mssql://sa:sa@1234@TCCL1035/IMSDB')
            .then()
            .catch( err => {
                console.log(err)
            })
            const result = sql.query`select * from IMSOrderMaster`
            console.dir(result);
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});