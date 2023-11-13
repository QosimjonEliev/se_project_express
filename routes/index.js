const router = require("express").Router();
const clothingItemRoutes = require("./clothingItem");
const userRoutes = require("./user");
const { createUser, userLogin } = require("../controllers/user");
const { NOT_FOUND } = require("../utils/errors");

router.use("/items", clothingItemRoutes);
router.use("/users", userRoutes);

router.post("/signup/", createUser);
router.post("/signin/", userLogin);

router.use((req, res) => {
  console.log(res);
  res.status(NOT_FOUND).send({
    message: "The request was sent to a non-existent address",
  });
});

module.exports = router;
