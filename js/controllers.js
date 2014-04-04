var directoryControllers = angular.module('directoryControllers', []);


directoryControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.directory = data;
		$scope.directoryOrder = 'name'; //sets default	
	});
}]);

directoryControllers.controller('DetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('js/data.json').success(function(data) {
		$scope.directory = data;
		$scope.whichItem = $routeParams.itemId;

		if($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId)-1;
		} else {
			$scope.prevItem = $scope.directory.length-1;
		}

		if($routeParams.itemId < $scope.directory.length-1) {
			$scope.nextItem = Number($routeParams.itemId)+1;
		} else {
			$scope.nextItem = 0;
		}
	});
}]);
