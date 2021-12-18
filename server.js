const mysql = require('mysql');
const util = require('util');


const db = mysql.createConnection({
    host     : 'lms-sql-db.czofcwhq9tvt.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'mySQL0037',
    database : 'savvySpaceSql',
    port : 3001,
    timeout : 60000,
    multipleStatements: true
});

db.connect(err=>{
    if(err) console.log(err);
    console.log('MySql Connected');
});

const query = util.promisify(db.query).bind(db);

module.exports = {query, db};