const express = require("express");
const router = express.Router();

const cors = require("cors");
router.use(cors());

router.use(express.urlencoded({ limit: '50mb', extended: true }));
router.use(express.json({ limit: '50mb' }));


const { userGet } = require("../controllers/user-controller");

router.get("/", userGet);


module.exports = router;