const express = require("express");
const router = express.Router();

const cors = require("cors");
router.use(cors());

router.use(express.urlencoded({ limit: '50mb', extended: true }));
router.use(express.json({ limit: '50mb' }));


const { adminGetItems, adminDeleteItem, adminGetUnits, adminAddUnit, adminUpdateUnit, adminDeleteUnit } = require("../controllers/admin-controller");

//Items
router.get("/items", adminGetItems);
router.delete("/items/:id", adminDeleteItem);

//Units
router.get("/units", adminGetUnits);
router.post("/units", adminAddUnit);
router.put("/units/:id", adminUpdateUnit);
router.delete("/units/:id", adminDeleteUnit);

//Extra
// router.put("/approval/:id", adminApproval);
// router.delete("/delete-thing/:id", adminDeleteThing);


module.exports = router;