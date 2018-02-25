(function () {
  'use strict';

  angular
    .module('app')
    .factory('HomeService', HomeService);

  function HomeService() {
    let employeeCost = 1000;
    let dependentCost = 500;
    let discount = .10; //10%

    let service = {
      getTotalCost: getTotalCost
    };

    return service;




    function getTotalCost(employeesArray) {
      employeesArray.forEach(employee => 
      {
        employee.cost.individual = _getEmployeeCost(employee);
        employee.cost.dependents = _getDependentCost(employee);
      });
      return employeesArray;
    }



  function _getDependentCost(employee) {

    let modifiedCost = dependentCost;

  	if(_hasDependents(employee)) { 
 		employee.dependentsArray.forEach(dependent => {
    	
    		if(_isDiscounted(dependent)) {
    			modifiedCost = _applyDiscount(modifiedCost);   	
			}

    });

	}
   else{
      modifiedCost = 0;
    }
    return modifiedCost;

  }


  function _getEmployeeCost(employee) { 

    let modifiedCost = employeeCost;
  	
  	if(_isDiscounted(employee)) {
  		modifiedCost = _applyDiscount(modifiedCost);
  	}

    return modifiedCost;
  }


  function _hasDependents(person) {
  	return (person.dependentsArray.length !== 0);
  }

    function _isDiscounted(person) {
    	let firstLetter = person.name.charAt(0).toLowerCase();
      return firstLetter === 'a';
    }

  function _applyDiscount(cost) {
  	return cost - (cost*discount);
  }

}

})();