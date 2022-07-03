const mysql = require("mysql");
const connection = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "exam_db" });

//Items
const adminGetItems = (req, res) => {
    connection.query(
        `SELECT * FROM main_table`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
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


//Units
const adminGetUnits = (req, res) => {
    connection.query(
        `SELECT * FROM unit_table`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}

const adminAddUnit = (req, res) => {
    connection.query(
        `INSERT INTO unit_table (unit, category)
        VALUES (?, ?)`,
        [req.body.unit, req.body.category],
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}

const adminUpdateUnit = (req, res) => {
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



module.exports = { adminGetItems, adminDeleteItem, adminGetUnits, adminAddUnit, adminUpdateUnit, adminDeleteUnit };