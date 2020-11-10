const { Router } = require('express');
const EmployeesService = require('../services/employees');

function employeesApi(app) {
  const router = Router();
  const employeesService = new EmployeesService();
  app.use('/api/employees', router);

  router.get('/', async (req, res, next) => {
    try {
      const employees = await employeesService.getEmployees();
      return res.status(200).json({
        data: employees,
        message: 'employees listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:employeeId', async (req, res, next) => {
    try {
      const { employeeId } = req.params;
      const employee = await employeesService.getEmployee({ employeeId });
      return res.status(200).json({
        data: employee,
        message: 'employee retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const { body: employee } = req;
      const createdEmployee = await employeesService.createEmployee({
        employee,
      });
      return res.status(201).json({
        data: createdEmployee,
        message: 'employee created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:employeeId', async (req, res, next) => {
    try {
      const { employeeId } = req.params;
      const {body: employee} = req;
      const updatedEmployee = await employeesService.updateEmployee({employeeId, employee});
      return res.status(200).json({
        data: updatedEmployee,
        message: 'employee updated'
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:employeeId', async (req, res, next) => {
    try {
      const { employeeId } = req.params;
      const deletedEmployee = await employeesService.deleteEmployee({ employeeId });
      return res.status(200).json({
        data: deletedEmployee,
        message: 'employee deleted',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = employeesApi;
