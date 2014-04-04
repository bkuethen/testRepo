var myApp = angular.module('myApp', [
	'ngRoute',
	'directoryControllers'
	]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/detail/:itemId',{
		templateUrl: '/partials/detail.html',
		controller: 'DetailController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);
