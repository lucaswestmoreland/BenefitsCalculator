(function () { 'use strict';

  angular
    .module('app')
    .factory('TableService', TableService);

  function TableService() {
    let salary = 52000; 

    let service = {
      getTotalCostYearly: getTotalCostYearly,
      getTotalCostMonthly: getTotalCostMonthly,
      getTotalCostPaycheck: getTotalCostPaycheck,
      getEmployeeTotalCost: getEmployeeTotalCost,
      getEmployeeNetIncome: getEmployeeNetIncome,
      getEmployeeBaseSalary: getEmployeeBaseSalary,
      getDependentCount: getDependentCount
    };

    return service;


    /**
    * gets the total yearly cost of all of the employees in the array as well
    * as their dependents
    * @param {object array} employeesArray - a list of employees
    * @return {float} expense - a dollar amount of costs
    */
    function getTotalCostYearly(employeesArray) {
      let expense = 0;
      if(_isValid(employeesArray)) {
        employeesArray.forEach(employee => {
          expense += parseFloat(getEmployeeTotalCost(employee, 'yearly'));
        });
      }
      return (expense).toFixed(2);
    }

    /**
    * gets the total monthly cost of all of the employees in the array as well
    * as their dependents
    * @param {object array} employeesArray - a list of employees
    * @return {float} expense - a dollar amount of costs
    */
    function getTotalCostMonthly(employeesArray) {
      let expense = 0;
      if(_isValid(employeesArray)) {
        employeesArray.forEach(employee => {
          expense += parseFloat(getEmployeeTotalCost(employee, 'monthly'));
        });
      }
      return (expense).toFixed(2);
    }
    
    /**
    * gets the total cost per paycheck of all of the employees in the array as well
    * as their dependents
    * @param {object array} employeesArray - a list of employees
    * @return {float} expense - a dollar amount of costs
    */
    function getTotalCostPaycheck(employeesArray) {
      let expense = 0;
      if(_isValid(employeesArray)) {
        employeesArray.forEach(employee => {
          expense += parseFloat(getEmployeeTotalCost(employee, 'paycheck'));
        });
      }
      return (expense).toFixed(2);
    }

    /**
    * gets the total cost for a specific employee and their dependents for a given 
    * pay period
    * @param {object} employee  
    * @param {string} period - a specified pay period
    * @return {float} cost - cost associated with that pay period
    */
    function getEmployeeTotalCost(employee, period) {
      
      switch(period) {
        
        case 'yearly':
          return parseFloat(_getEmployeeTotalCostYearly(employee)).toFixed(2);
        
        case 'monthly':
          return parseFloat(_getEmployeeTotalCostMonthly(employee)).toFixed(2);
        
        case 'paycheck':
          return parseFloat(_getEmployeeTotalCostPaycheck(employee)).toFixed(2);
        
        default:
          throw "Invalid Pay Period";
          return;
      }
    }

    /**
    * gets the total net income after all of the benefits deductions for a specific
    * employee for a given pay period
    * @param {object} employee
    * @param {string} period - a specified pay period
    * @return {float} income - income for the employee for a period
    */
    function getEmployeeNetIncome(employee, period) {
      
      switch(period) {
        
        case 'yearly':
          return _getEmployeeNetIncomeYearly(employee);
        
        case 'monthly':
          return _getEmployeeNetIncomeMonthly(employee);
        
        case 'paycheck':
          return _getEmployeeNetIncomePaycheck(employee);
        
        default:
          throw "Invalid Pay Period";
          return;
      }
    }

    /**
    * gets the base salary for an employee
    * @return {int} salary
    */
    function getEmployeeBaseSalary() {
      return salary;
    }

    /**
    * gets the number of dependents associated with a given employee
    * @param {object} employee
    * @return {int} count - number of dependents
    */
    function getDependentCount(employee) {
      let count = 0;
      employee.dependentsArray.forEach(dependent => {
        count++;
      });

      return count;
    }


  /***---Helper Functions---***/

    /**
    * gets total cost for a given employee for the year
    * @param {object} employee
    * @return {float} total cost for the year
    */
    function _getEmployeeTotalCostYearly(employee) {
      return (employee.cost.individual + employee.cost.dependents);
    }

    /**
    * gets total cost for a given employee for the month
    * @param {object} employee
    * @return {float} total cost for the month
    */
    function _getEmployeeTotalCostMonthly(employee) {
      return (_getEmployeeTotalCostYearly(employee)/12).toFixed(2);
    }

    /**
    * gets total cost for a given employee for the paycheck
    * @param {object} employee
    * @return {float} total cost for the paycheck
    */
    function _getEmployeeTotalCostPaycheck(employee) {
      return (_getEmployeeTotalCostYearly(employee)/26).toFixed(2);
    }

    /**
    * gets total net income for a given employee for the year
    * @param {object} employee
    * @return {float} net income for the paycheck
    */
    function _getEmployeeNetIncomeYearly(employee) {
      return salary - (employee.cost.individual + employee.cost.dependents);
    }

    /**
    * gets total net income for a given employee for the month
    * @param {object} employee
    * @return {float} net income for the paycheck
    */
    function _getEmployeeNetIncomeMonthly(employee) {
      return (_getEmployeeNetIncomeYearly(employee)/12).toFixed(2);
    }

    /**
    * gets total net income for a given employee for the paycheck
    * @param {object} employee
    * @return {float} net income for the paycheck
    */
    function _getEmployeeNetIncomePaycheck(employee) {
      return (_getEmployeeNetIncomeYearly(employee)/26).toFixed(2);
    }

    /**
    * checks if a given array of employees contains any objects
    * @param {object array} employeesArray
    * @return {boolean} true if the array contains objects  
    */
    function _isValid(employeesArray) {
      return (employeesArray !== null);
    }



  }

})();