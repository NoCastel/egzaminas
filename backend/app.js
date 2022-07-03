const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const { adminAuth, userAuth } = require("./middleware/auth");

const front = require('./routes/front');
const login = require('./routes/login');
const admin = require('./routes/admin');

app.get("/", (req, res) => { res.send("Main"); });

app.use('/front', front);
app.use('/login', login);
app.use('/admin', adminAuth, admin);

const port = 6174;
app.listen(port, () => console.log(`Server listening on port: ${port}`));