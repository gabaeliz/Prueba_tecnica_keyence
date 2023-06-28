const { Router } = require("express");
const router = Router();

const employeeRouter = require("./employee");

router.use(employeeRouter);

module.exports = router;