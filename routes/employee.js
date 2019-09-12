const express = require('express');
const router = express.Router();
const { getEmployees, getEmployeesById, saveEmployee, updateEmployee, deleteEmployee } = require('../controllers/employees');

router.get('/', getEmployees);
router.post('/', saveEmployee);
router.get('/:id', getEmployeesById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;