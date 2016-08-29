myApp.controller("navController", ["$scope", '$http', '$location', function($scope, $http, $location) {
    console.log('navController is a go');

    $scope.currentPage = 'home';
    $scope.go = function go(page) {
        console.log(page);
        $location.path('/' + page);
        console.log($location.path);

    };

}]); // end controller
