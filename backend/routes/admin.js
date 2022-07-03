const express = require("express");
const router = express.Router();

const cors = require("cors");
router.use(cors());

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//if there are pictures
// router.use(express.urlencoded({ limit: '50mb', extended: true }));
// router.use(express.json({ limit: '50mb' }));


const { adminGetItems, adminDeleteItem, adminGetUnits, adminAddUnit, adminUpdateUnit, adminDeleteUnit } = require("../controllers/admin-controller");

//Items
router.get("/items", adminGetItems);
router.delete("/items/:id", adminDeleteItem);

//Units
router.get("/units", adminGetUnits);
router.post("/units", adminAddUnit);
router.put("/units/:id", adminUpdateUnit);
router.delete("/units/:id", adminDeleteUnit);

module.exports = router;