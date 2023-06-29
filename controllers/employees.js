require("../mongo");
const Employee = require("../models/Employee.js");
const { response } = require('express');
const employee = require("../mongo.js")

//CRUD
//Create an employee
const addNewEmployee = async(req, res) => {
    const employee = req.body
    if (!employee.content){
        return res.status(400).send('Content is required')
    }
    const newEmployee = new Employee({
        employeeID: employee.employeeID,
        employeeName: employee.employeeName,
        date: employee.date,
        punchIn: employee.punchIn,
        punchOut: employee.punchOut 
    });
    newEmployee.save().then(savedEmployee => {
        response.status(200).send(savedEmployee)
    });
}

//Find an employee
const showEmployee = async (req, res) => {
    try {
      const employee = await Employee.find();
      res.json(employee);
    } catch (error) {
      res.status(400).send('Error in obtaining employees');
    }
  };

//Delete an employee  
const deleteEmployee = async (req, res) => {
    try {
      const employeeID = req.params.employeeID;
      const employeeDelete = await Employee.findByIdAndDelete(employeeID);
      if (!employeeDelete) {
        return res.status(404).json('Sorry employee not found');
      }
      res.status(200).send('Employee successfully removed');
    } catch (error) {
      res.status(500).send('Error deleting employee');
    }
  };

//Update an employee
const updateEmployee = async (req, res) => {
    try {
      const employeesID = req.params.employeeID;
      const { employeeID, employeeName,punchIn,punchOut } = req.body;
  
      const employeeUpgrade = await Employee.findByIdAndUpdate(
        employeeID,
        { employeeID, employeeName,punchIn,punchOut },
        { new: true }
      );
  
      if (!employeeUpgrade) {
        return res.status(404).json({ error: 'Empleado no encontrado' });
      }
  
      res.json(employeeUpgrade);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el empleado' });
    }
  };



module.exports = {
    addNewEmployee,
    showEmployee,
    deleteEmployee,
    updateEmployee
};

