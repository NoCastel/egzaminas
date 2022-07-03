const mysql = require("mysql");
const connection = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "exam_db" });


const uuid = require('uuid');
const bcrypt = require('bcryptjs');



const adminAuth = function (req, res, next) {
    connection.query(
        `SELECT name 
        FROM (
            SELECT * FROM users
            WHERE role = 1
        ) users 
        WHERE session = ?`,
        [req.headers['authorization'] || ''],
        (err, results) => {
            if (err) throw err;
            if (!results.length) {
                res.status(401).send('Access denied');
                req.connection.destroy();
            } else {
                next();
            }
        }
    );
}

const userAuth = function (req, res, next) {
    connection.query(
        `SELECT name 
        FROM (
            SELECT * FROM users
            WHERE role = 0
        ) users 
        WHERE session = ?`,
        [req.headers['authorization'] || ''],
        (err, results) => {
            if (err) throw err;
            if (!results.length) {
                res.status(401).send('Access denied');
                req.connection.destroy();
            } else {
                next();
            }
        }
    );
}


const signUp = async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(req.body.password, salt);
    connection.query(
        `INSERT IGNORE INTO main_table (name, password)
        VALUES (?, ?)`, //ignore if there is a dublicate in the db
        [req.body.name, hashPass],
        (err, result) => {
            if (err) throw err;
            if (result.insertId) { res.status(201).send('created') }
            else { res.status(400).send('bad request') } 0
        }
    )
}


const signIn = (req, res) => {
    connection.query(
        `SELECT name, password
        FROM main_table
        WHERE name = ?`,
        [req.body.name],
        async (err, result) => {
            if (err) throw err;

            if (!result.length) {
                return res.status(401).send('bad username or password');
            }

            try {
                if (await bcrypt.compare(req.body.password, (result[0].password))) {
                    connection.query(
                        `UPDATE main_table
                        SET session = ?
                        WHERE name = ?`,
                        [uuid.v4(), req.body.name],
                        (err, result) => {
                            if (err) throw err;
                            res.status(200).send(`logged in as ${req.body.name}`);
                        }
                    )
                } else {
                    return res.status(401).send('bad username or password');
                }
            } catch {
                res.status(500).send();
            }

        });
}

const loginCheck = (req, res) => {
    connection.query(
        `SELECT name 
        FROM users 
        WHERE session = ?`,
        [req.headers['authorization'] || ''],
        (err, result) => {
            if (err) throw err;
            !result.length ? res.send({ msg: 'error' }) : res.send({ msg: 'ok' });
        });
}

const adminCheck = (req, res) => {
    connection.query(
        `SELECT name 
        FROM (
            SELECT * FROM users
            WHERE role = 1
        ) users 
        WHERE session = ?`,
        [req.headers['authorization'] || ''],
        (err, result) => {
            if (err) throw err;
            !result.length ? res.send({ msg: 'error' }) : res.send({ msg: 'ok' });
        });
}
const userCheck = (req, res) => {
    connection.query(
        `SELECT name 
        FROM (
            SELECT * FROM users
            WHERE role = 0
        ) users 
        WHERE session = ?`,
        [req.headers['authorization'] || ''],
        (err, result) => {
            if (err) throw err;
            !result.length ? res.send({ msg: 'error' }) : res.send({ msg: 'ok' });
        });
}


module.exports = { adminAuth, signUp, signIn, loginCheck, userAuth };