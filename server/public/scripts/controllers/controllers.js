myApp.controller('barnController', ['$scope', '$http', function($scope, $http) {
    console.log("barn animals");

    var key = '8b98a506916106507ad19e43e22763e4';
    var baseURL = 'http://api.petfinder.com/';

    $scope.getRandomPet = function() {
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=barnyard';
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
}]);


myApp.controller('pigController', ['$scope', '$http', function($scope, $http) {
    console.log("pigs r cuties");

    var key = '8b98a506916106507ad19e43e22763e4';
    var baseURL = 'http://api.petfinder.com/';

    $scope.getRandomPet = function() {
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=pig';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                console.log(response.data);
                $scope.animal = response.data.petfinder.pet;
            });
    }
}]);

myApp.controller('smallFurryController', ['$scope', '$http', function($scope, $http) {
    console.log("Small and Furry");

    var key = '8b98a506916106507ad19e43e22763e4';
    var baseURL = 'http://api.petfinder.com/';

    $scope.getRandomPet = function() {
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=smallfurry';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                console.log(response.data);
                $scope.animal = response.data.petfinder.pet;
            });
    }
}]);
