const router = require("express").Router();
const auth = require("../middlewares/auth");
const { getCurrentUser, usersUpdate } = require("../controllers/user");


router.get("/me", auth, getCurrentUser);

router.patch("/me", auth, usersUpdate);


module.exports = router;
