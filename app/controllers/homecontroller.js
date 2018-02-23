(function () {
  'use strict';
  
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

    function addDependent(employee) {
      let dependentCount = employee.dependentsArray.length + 1;
      employee.dependentsArray.push({
        name: '',
        id: dependentCount,
        cost: 0
      });
    }
       
    function removeEmployee() {
      
      if($scope.employeesArray.length == 1) return;

      let newestEmployee = $scope.employeesArray.length - 1;
      $scope.employeesArray.splice(newestEmployee);
    }

    function removeDependent(employee) {
      let newestDependent = employee.dependentsArray.length - 1;
      employee.dependents.splice(lastDependent);
    }

    function submit(isReturnable) {
      if(!isReturnable) {
      	throw "InvalidSubmission";
      } else {
        let updatedEmployees = HomeService.getTotalCost($scope.employeesArray);
        $state.go('results', { employeesArray: updatedEmployees });
      }
    }
  }

})();