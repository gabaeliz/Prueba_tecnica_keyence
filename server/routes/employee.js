const { Router } = require("express");
const router = Router();
const { employees } = require("../../controllers");


router.post('/newEmployee',employees.addNewEmployee);
router.get('/getEmployee',employees.showEmployee);
router.delete('/deleteEmployee',employees.deleteEmployee);
router.put('/updateEmployee',employees.updateEmployee);

module.exports = router;