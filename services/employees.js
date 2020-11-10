const Employee = require('../models/Employee');

class EmployeesService {
  constructor() {}
  async getEmployees() {
    const employees = await Employee.find();
    return employees;
  }
  async getEmployee({ employeeId }) {
    const employee = await Employee.findById(employeeId);
    return employee;
  }
  async createEmployee({ employee }) {
    const createdEmployee = new Employee(employee);
    await createdEmployee.save();
    return createdEmployee;
  }
  async updateEmployee({ employeeId, employee }) {
    const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, employee);
    return updatedEmployee;
  }
  async deleteEmployee({ employeeId }) {
    const employee = await Employee.findByIdAndDelete(employeeId);
    return employee;
  }
}

module.exports = EmployeesService;
