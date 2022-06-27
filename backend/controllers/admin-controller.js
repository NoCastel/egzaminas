const mysql = require("mysql");
const connection = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "exam_db" });


const adminGetAll = (req, res) => {
    connection.query(
        `SELECT * FROM main_table`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}

const adminGetUnits = (req, res) => {
    connection.query(
        `SELECT * FROM unit_table`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}

const adminAddItem = (req, res) => {
    connection.query(
        `INSERT INTO unit_table (unit, category)
        VALUES (?, ?)`,

        [req.body.name ? req.body.name:'no name', 1],
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}


const adminUpdateUnits = (req, res) => {
    connection.query(
        `UPDATE unit_table 
        SET category = ? 
        WHERE unit_id = ?`,
        [req.body.category, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}

const adminDeleteUnit = (req, res) => {
    connection.query(
        `DELETE FROM unit_table 
        WHERE unit_id = ?`,
        [req.params.id],
        (err, results) => {
            if (err) { throw err; }
            res.send(results);
        });
}

const adminDeleteItem = (req, res) => {
    connection.query(
        `DELETE FROM main_table 
        WHERE main_id = ?`,
        [req.params.id],
        (err, results) => {
            if (err) { throw err; }
            res.send(results);
        });
}

module.exports = { adminGetAll, adminGetUnits, adminDeleteUnit, adminUpdateUnits, adminDeleteItem, adminAddItem }