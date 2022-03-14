const express = require("express");
// const path = require("path");
const path = require("mysql");
const mysql = require("mysql");

const app = express();
//
// app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
//
//
//
// app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
//
app.listen('3000',() => {
    console.log('Server started on port 3000');
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'modemysql'
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql conected..');
});


app.get('createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created');
    });
});

// app.get("/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
// });

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // passworld: '123456'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
});

con.connect(function(err){
    if (err) throw err;
    console.log('Connected');
    con.query('CREATE DATABASE express_db', function (err, result){
        if (err) throw err;
        console.log('database created');
    })
});
