const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

//con global creo un objeto de ambito global, para usar en cualquier parte de la aplicacion.
//Con esta sentencia, con db puedo acceder al pool desde cualquier lugar de la aplicacion express.
global.db = pool;