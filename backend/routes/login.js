const express = require("express");
const router = express.Router();

const cors = require("cors");
router.use(cors());

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const { signUp, signIn, loginCheck } = require("../middleware/auth");


router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/login-check", loginCheck);


module.exports = router;