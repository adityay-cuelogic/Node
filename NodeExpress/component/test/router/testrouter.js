const express = require("express");
const router = express.Router();
const members = require("../../../members");
const testcontroller = require("../controller/testcontroller")

router.get("/", ( req, res )=> {
    res.json(members);
})

router.get("/:id", testcontroller.getRecords);

router.post('/', testcontroller.insertRecords);

module.exports = router;