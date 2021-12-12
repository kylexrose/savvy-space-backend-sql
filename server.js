const mysql = require('mysql');
const util = require('util');


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

const query = util.promisify(db.query).bind(db);

module.exports = {query, db};