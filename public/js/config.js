const mysql = require('mysql');
const config = {
    host: 'remotemysql.com:3306',
    user: 'Mhgp2yBb9o',
    password: 'cxrX8lrpKs',
    database: 'Mhgp2yBb9o',
};

const pool = mysql.createPool(config);


module.exports = pool;
