var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', function($stateProvider){
	$stateProvider.state('home', {
		url: '',
		templateUrl:'app/templates/home.html',

	});
}]);
