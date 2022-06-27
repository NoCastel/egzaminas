const express = require("express");
const router = express.Router();

const cors = require("cors");
router.use(cors());

router.use(express.urlencoded({ limit: '50mb', extended: true }));
router.use(express.json({ limit: '50mb' }));


const { adminGetAll, adminGetUnits, adminUpdateUnits, adminDeleteUnit, adminDeleteItem, adminAddItem } = require("../controllers/admin-controller");

//Crud
router.get("/all", adminGetAll);
router.delete("/all/:id", adminDeleteItem);

router.get("/units", adminGetUnits);
router.put("/units/:id", adminUpdateUnits);
router.delete("/units/:id", adminDeleteUnit);
router.post("/create", adminAddItem);

//Extra
// router.put("/approval/:id", adminApproval);
// router.delete("/delete-thing/:id", adminDeleteThing);


module.exports = router;