const router = require("express").Router()

const UserController = require("../controllers/UserController");

router.route("/services").post((req, res) => UserController.create(req, res))

module.exports = router;