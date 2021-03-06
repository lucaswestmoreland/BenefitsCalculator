(function () { 'use strict';

	angular.module('app')
			.controller('TableController', TableController);


			TableController.$inject = ['TableService', '$scope', '$stateParams'];
			function TableController (TableService, $scope, $stateParams) {

				$scope.employeesArray = $stateParams.employeesArray;
				$scope.getYearlyEmployerExpenses = TableService.getTotalCostYearly($scope.employeesArray);
				$scope.getMonthlyEmployerExpenses = TableService.getTotalCostMonthly($scope.employeesArray);
				$scope.getPaycheckEmployerExpenses = TableService.getTotalCostPaycheck($scope.employeesArray);
				$scope.getEmployeeBaseSalary = TableService.getEmployeeBaseSalary();
				$scope.getDependentCount = (employee) => {return TableService.getDependentCount(employee);};
				$scope.getEmployeeTotalCost = (employee, period) => {return TableService.getEmployeeTotalCost(employee, period);};
				$scope.getEmployeeNetIncome = (employee, period) => {return TableService.getEmployeeNetIncome(employee, period);};

				/*handle table page refresh*/
				if($scope.employeesArray == 'null') {
					employeesArray = [];
				}

				
			}









})();