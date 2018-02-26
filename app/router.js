(function () { 'use strict';

	angular
	.module('app', ['ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider
		.state('home', {
			url: '',
			templateUrl:'app/templates/home.html',
			controller: 'HomeController'
		})			  

		.state('table', {
			url: '/table',
			templateUrl:'app/templates/table.html',
			controller: 'TableController',
			params: {
				employeesArray: null
			}
		});
	}]);

})();