const mysql = require('mysql');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    port: 3306,
    database: "soamee_bbdd"
});

//con global creo un objeto de ambito global, para usar en cualquier parte de la aplicacion.
//Con esta sentencia, con db puedo acceder al pool desde cualquier lugar de la aplicacion express.
global.db = pool;