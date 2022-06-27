const mysql = require("mysql");
const connection = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "exam_db" });


const userGet = (req, res) => {
    connection.query(
        `SELECT * FROM main_table`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}


//Thing

// const userApproval = (req, res) => {
//     connection.query(
//         `UPDATE main_table 
//         SET approval = ? 
//         WHERE main_id = ?`,
//         [req.body.approval, req.params.id],
//         (err, result) => {
//             if (err) throw err;
//             res.send(result);
//         });
// }

// const userDeleteThing = (req, res) => {
//     connection.query(
//         `DELETE FROM main_table 
//         WHERE main_id = ?`,
//         [req.params.id],
//         (err, results) => {
//             if (err) { throw err; }
//             res.send(results);
//         });
// }



module.exports = { userGet }