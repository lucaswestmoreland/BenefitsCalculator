var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', function($stateProvider){
	$stateProvider
	.state('home', {
		url: '',
		templateUrl:'app/templates/home.html',
		controller: 'HomeController'

	})			  

	.state('table', {
		url: '/table',
		templateUrl:'app/templates/table.html',
		controller: 'TableController'
	})
}]);

