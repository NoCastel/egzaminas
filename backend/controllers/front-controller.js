const mysql = require("mysql");
const connection = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "exam_db" });


const frontGetMain = (req, res) => {
    connection.query(
        `SELECT * FROM main_table`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}

const frontGetUnit = (req, res) => {
    connection.query(
        `SELECT * FROM unit_table`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}


// const frontAddThing = (req, res) => {
//     if (!!req.body.unit && !!req.body.username) {
//         connection.query(
//             `INSERT INTO unit_table (unit, main_id, username) VALUES (?, ?, ?)`,
//             [req.body.unit, req.params.id, req.body.username],
//             (err, results) => {
//                 if (err) { throw err; }
//                 res.send(results);
//             });
//     } else {
//         res.status(400).send('require: unit and username')
//     }
// }


module.exports = { frontGetMain, frontGetUnit }