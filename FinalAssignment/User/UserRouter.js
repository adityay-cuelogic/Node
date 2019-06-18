const express = require("express");
const router = express.Router();
const userController = require("../User/userController");
const JoiValidation =  require("./validate");
const TokenVerification = require("../middleware/checkToken");

router.post("/signup",JoiValidation.signupValidator,userController.userSignup)
router.post("/login",userController.login)
router.get("/userActivity",userController.getUserNotLoggedIn)
router.get("/:userName",TokenVerification.checkToken ,userController.getUserByName)
router.get("/",TokenVerification.checkToken,userController.getUsersList)
router.put("/:userName",TokenVerification.checkToken,JoiValidation.updateUserByNameValidator,userController.updateUserByName)

module.exports = router;