const express = require("express");
const router = express.Router();

router.use(express.json({ limit: '50mb' }));
router.use(express.urlencoded({ limit: '50mb', extended: true }));

const { frontGetMain, frontGetUnit } = require("../controllers/front-controller");

router.get("/main", frontGetMain);
router.get("/unit", frontGetUnit);

// router.post("/thing/:id", frontAddThing);
// router.all('*', (req, res) => res.status(404).send('404 not found'));


module.exports = router;