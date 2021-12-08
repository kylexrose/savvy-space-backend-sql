const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'savvySpaceSql',
    multipleStatements: true
});

db.connect(err=>{
    if(err) console.log(err);
    console.log('MySql Connected');
});

module.exports = db;