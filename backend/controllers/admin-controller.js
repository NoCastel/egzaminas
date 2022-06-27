const mysql = require("mysql");
const connection = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "exam_db" });


const adminGet = (req, res) => {
    connection.query(
        `SELECT main_table.main_id, main_table.name, main_table.category,
        FROM main_table
        LEFT JOIN unit_table
        on main_table.main_id = unit_table.main_id
        GROUP BY main_table.main_id`,
        // `SELECT main_table.main_id, main_table.name, main_table.goal, main_table.picture, main_table.creator, main_table.approval,
        // SUM(things.thing) AS collected,
        // main_table.goal - SUM(things.thing) AS needed,
        // IF(main_table.goal - SUM(things.thing) > 0, 0, 1) AS reached
        // FROM main_table
        // LEFT JOIN things
        // ON main_table.main_id = things.main_id
        // GROUP BY main_table.main_id`,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}
const adminAddBox = () => {

}
const adminAddContainer = () => {
    connection.query(
        `INSERT INTO main_table (name, category)
        VALUES (?, ?)`,
        [req.body.name, req.body.category],
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}


//Thing

const adminApproval = (req, res) => {
    connection.query(
        `UPDATE main_table 
        SET approval = ? 
        WHERE main_id = ?`,
        [req.body.approval, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}

const adminDeleteThing = (req, res) => {
    connection.query(
        `DELETE FROM main_table 
        WHERE main_id = ?`,
        [req.params.id],
        (err, results) => {
            if (err) { throw err; }
            res.send(results);
        });
}



module.exports = { adminGet, adminApproval, adminDeleteThing, adminAddBox, adminAddContainer }