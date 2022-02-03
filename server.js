const mysql = require('mysql');
const util = require('util');


const db = mysql.createConnection({
    host     : process.env.RDS,
    user     : 'admin',
    password : process.env.DB_PASSWORD,
    database : 'savvySpaceSql',
    port : 3001,
    timeout : 60000,
    multipleStatements: true
});

db.connect(err=>{
    if(err) {
        console.log(err);
    }
    else{
        console.log('MySql Connected')};
});

const query = util.promisify(db.query).bind(db);

module.exports = {query, db};