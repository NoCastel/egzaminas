const express = require("express");
const router = express.Router();

const cors = require("cors");
router.use(cors());

router.use(express.urlencoded({ limit: '50mb', extended: true }));
router.use(express.json({ limit: '50mb' }));


const { adminGet, adminApproval, adminDeleteThing, adminAddBox, adminAddContainer } = require("../controllers/admin-controller");

//Crud
router.get("/", adminGet);
router.get("/", adminGet);

//Extra
// router.put("/approval/:id", adminApproval);
// router.delete("/delete-thing/:id", adminDeleteThing);


module.exports = router;