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

  	if(_hasDependents(employee)) { 
 		
 		employee.dependentsArray.forEach(dependent => {
    	
    		if(_isDiscounted(dependent)) {
    			dependent.cost = _applyDiscount(dependentCost);   	
			}
    	
    		else {
    		dependent.cost = dependentCost;
			}
    	   
    		employee.cost.dependents += dependent.cost; 
      	
      	});
	}
  }


  function _getEmployeeCost(employee) { 
  	
  	if(_isDiscounted(employee)) {
  		employee.cost.individual = _applyDiscount(employeeCost);
  	}

  	else{
  		employee.cost.individual = employeeCost;
  	}
  }


  function _hasDependents(person) {
  	return (typeof person.dependentsArray !== 'undefined' && person.dependentsArray !== null);
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