const mysql = require("mysql");
const connection = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "exam_db" });

const uuid = require('uuid');
const md5 = require("js-md5");

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


const signIn = (req, res) => {
    const key = uuid.v4();
    connection.query(
        `UPDATE users
		SET session = ?
		WHERE name = ? AND pass = ?`,
        [key, req.body.user, md5(req.body.pass)],
        (err, result) => {
            console.log(md5(req.body.pass))
            if (err) throw err;
            !result.affectedRows ? res.send({ msg: 'error', key: '' }) : res.send({ msg: `${req.body.user}`, key });
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


module.exports = { adminAuth, signIn, loginCheck, userAuth };