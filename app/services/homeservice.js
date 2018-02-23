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
        employee.cost.personal = getIndividualCost(employee, 'employee');
        employee.cost.dependents = getIndividualCost(employee.dependents, 'dependent');
      });
      return employeesArray;
    }

    function getIndividualCost(person, type) {

    	let personCost = 0;
    	if(type == 'employee') 			//if an employee
      		personCost = employeeCost;

      	else { 							//if a dependent
      		personCost = dependentCost;
      		dependentsArray.forEach(dependent => {
        	dependent.cost = getCost(dependent, 'dependent');
        	personCost += dependent.cost;
      		});
      	}

        if(isDiscounted(person))
        personCost = personCost - (personCost * discount);
      
    	return personCost;
    }

    function isDiscounted(person) {
    	let firstLetter = person.name.charAt(0).toLowerCase();
      return firstLetter === 'a';
    }

  }

})();