const express = require('express');
const { getAllEmployees } = require('../../controllers/employeesController');
router = express.Router();
path = require('path');
const employeesController=require('../../controllers/employeesController')

router.route('/')
    .get(employeesController.getAllEmployees)

    .post(employeesController.createNewEmployee)
   
    .put(employeesController.updateEmployee)

    .delete(employeesController.deleteEmployee)

    router.route('/:id')
    .get(employeesController.getEmployee)


module.exports = router;