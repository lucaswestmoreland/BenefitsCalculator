(function () {
	'use strict';

	angular.module('app')
			.controller('TableController', TableController);




			TableController.$inject = ['TableService', '$scope', '$stateParams'];


			function TableController (TableService, $scope, $stateParams) {

				$scope.employeesArray = $stateParams.employeesArray;
				
				$scope.getYearlyEmployerExpenses = TableService.getTotalCostYearly($scope.employeesArray);
				$scope.getMonthlyEmployerExpenses = TableService.getTotalCostMonthly($scope.employeesArray);
				$scope.getPaycheckEmployerExpenses = TableService.getTotalCostPaycheck($scope.employeesArray);


			}









})();