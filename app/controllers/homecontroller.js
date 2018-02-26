(function () { 'use strict';
  
  angular.module('app')
  		 .controller('HomeController', HomeController);

  		 


 	HomeController.$inject = ['HomeService', '$scope', '$state']; 

  	function HomeController(HomeService, $scope, $state) {

    $scope.employeesArray = [];
    $scope.addEmployee = addEmployee;
    $scope.addDependent = addDependent;
    $scope.removeEmployee = removeEmployee;
    $scope.removeDependent = removeDependent;
    $scope.submit = submit;
    $scope.addEmployee();

    /**
    * Adds an employee object to the employeesArray
    * @return {void} updates employeesArray
    */
    function addEmployee() {
      let employeeCount = $scope.employeesArray.length + 1;
      $scope.employeesArray.push({
        name: '',
        id: employeeCount, 
        dependentsArray: [],
        cost: {
        	individual: 0,
        	dependents: 0
        }
        
      });
    }

    /**
    * adds a dependent object to an employee's dependentsArray
    * @param {object} employee
    * @return {void} when no employee exists - updates dependentsArray
    */
    function addDependent(employee) {

    	if(employee === null || employee === 'undefined') { //if that employee doesn't exist
    		return;
    	}
      let dependentCount = employee.dependentsArray.length + 1;
      employee.dependentsArray.push({
        name: '',
        id: dependentCount,
        cost: 0
      });
    }

    /**
    * removes the newest employee from the employeesArray
    * @return {void} when one or less employees exist - updates employeesArray 
    */   
    function removeEmployee() {
      
      if($scope.employeesArray.length <= 1) return; //if you can't remove any more employees

      let newestEmployee = $scope.employeesArray.length - 1;
      $scope.employeesArray.splice(newestEmployee);
    }

    /**
    * removes the newest dependent associated with the given employee
    * @param {object} employee
    * @return {void} when employee doesn't exist - updates dependentsArray
    */
    function removeDependent(employee) {
    	if(employee == null || employee == 'undefined') { //if that employee doesn't exist
    		return;
    	}
      
      let lastDependent = employee.dependentsArray.length - 1;
      employee.dependentsArray.splice(lastDependent);
    }

    /**
    * redirects user to the table page once the information has been entered
    */
    function submit() {
      
        let updatedEmployees = HomeService.setTotalCost($scope.employeesArray);
        $state.go('table', {employeesArray: updatedEmployees});
      
    }
  }

})();