myApp.controller("navController", ["$scope", '$http', '$location', function($scope, $http, $location) {
    console.log('navController is a go');

    $scope.animalContent = "";
    $scope.changeAnimal = function() {
        if ($scope.animalContent != '') {
            $scope.getRandomPet();
        }
    }

    var key = '8b98a506916106507ad19e43e22763e4';
    var baseURL = 'http://api.petfinder.com/';

    $scope.getRandomPet = function() {
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=' + $scope.animalContent;
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                console.log(response.data);
                $scope.animal = response.data.petfinder.pet; //animal defined here
            });
    }

    //
    // $scope.currentPage = 'home';
    //
    // $scope.go = function go(page) {
    //     console.log(page);
    //     $location.path('/' + page);
    //     console.log($location.path);
    //
    // };

}]); // end controller
