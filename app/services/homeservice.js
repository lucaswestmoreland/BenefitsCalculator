(function () { 'use strict';

  angular
  .module('app')
  .factory('HomeService', HomeService);


  function HomeService() {
    let employeeCost = 1000;
    let dependentCost = 500;
    let discount = .10; //10%

    let service = {
      setTotalCost: setTotalCost
    };

    return service;



/**
 * sets cost values to each employee in the array based on the 
 * amount of dependents that are associated with them
 * @param {object array} employeesArray - a list of employees
 * @return {object array} employeesArray - a list of employees with updated values
 */
 function setTotalCost(employeesArray) {
  employeesArray.forEach(employee => 
  {
    employee.cost.individual = _getEmployeeCost(employee);
    employee.cost.dependents = _getDependentCost(employee);
  });
  return employeesArray;
}




/***---Helper Methods---***/


/**
 * gets the sum of the dependents costs associated with
 * an employee
 * @param {object} employee
 * @return {int} cost - total cost of the dependents for that employee
 */
function _getDependentCost(employee) {

  let modifiedCost = 0;

  if(_hasDependents(employee)) { 
    employee.dependentsArray.forEach(dependent => 
    {
      if(_isDiscounted(dependent)) {
        modifiedCost += _applyDiscount(dependentCost);   	
      }
      else {
        modifiedCost += dependentCost
      }
    });
  }
  
  else{
    modifiedCost = 0;
  }

  return modifiedCost;
}

/**
 * gets the cost of an employee ignoring dependents
 * @param {object} employee
 * @return {int} cost - cost of the individual employee
 */
function _getEmployeeCost(employee) { 

  let modifiedCost = employeeCost;

  if(_isDiscounted(employee)) {
    modifiedCost = _applyDiscount(employeeCost);
  }

  return modifiedCost;
}

/**
* checks if an employee has any dependents
* @param {object} employee
* @return {boolean} - true if there are dependents
*/
function _hasDependents(employee) {
 return (employee.dependentsArray.length !== 0);
}

/**
* checks if an employee or dependents name starts with 'a', which
* constitutes a discount
* @param {object} person 
* @return {boolean} - true if name starts with 'a'
*/
function _isDiscounted(person) {
 let firstLetter = person.name.charAt(0).toLowerCase();
 return firstLetter === 'a';
}

/**
* applies a 10% discount to a cost
* @param {int} cost
* @return {int} cost - the updated cost value once the discount has been applied
*/
function _applyDiscount(cost) {
 return cost - (cost*discount);
}

}

})();