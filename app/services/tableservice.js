(function () {
  'use strict';

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
      getEmployeeNetIncome: getEmployeeNetIncome
    };

    return service;


/*
Returns the total yearly cost to the Employer for all
Employees and Dependents 
*/
    function getTotalCostYearly(employeesArray) {
      let expense = 0;
      employeesArray.forEach(employee => {
        expense += getEmployeeTotalCost(employee, 'yearly');
      });
      return expense;
    }

    function getTotalCostMonthly(employeesArray) {
      let expense = 0;
      employeesArray.forEach(employee => {
        expense += getEmployeeTotalCost(employee, 'monthly');
      });
      return expense;
    }
    
    function getTotalCostPaycheck(employeesArray) {
      let expense = 0;
      employeesArray.forEach(employee => {
        expense += getEmployeeTotalCost(employee, 'paycheck');
      });
      return expense;
    }

    function getEmployeeTotalCost(employee, period) {
      
      switch(period) {
        
        case 'yearly':
          return _getEmployeeTotalCostYearly(employee);
        
        case 'monthly':
          return _getEmployeeTotalCostMonthly(employee);
        
        case 'paycheck':
          return _getEmployeeTotalCostPaycheck(employee);
        
        default:
          throw "Invalid Pay Period";
          return;
      }
    }

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




    function _getEmployeeTotalCostYearly(employee) {
      return employee.cost.individual + employee.cost.dependents;
    }

    function _getEmployeeTotalCostMonthly(employee) {
      return (_getEmployeeTotalCostYearly(employee)/12).toFixed(2);
    }

    function _getEmployeeTotalCostPaycheck(employee) {
      return (_getEmployeeTotalCostYearly(employee)/26).toFixed(2);
    }
    function _getEmployeeNetIncomeYearly(employee) {
      return salary - (employee.cost.individual + employee.cost.dependents);
    }

    function _getEmployeeNetIncomeMonthly(employee) {
      return (_getEmployeeNetIncomeYearly(employee)/12).toFixed(2);
    }

    function _getEmployeeNetIncomePaycheck(employee) {
      return (_getEmployeeNetIncomeYearly(employee)/26).toFixed(2);
    }



  }

})();