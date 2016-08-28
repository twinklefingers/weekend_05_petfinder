myApp.controller('barnController', ['$scope', '$http', function($scope, $http) {
    console.log("barn animals");
    $scope.animalContent = "";

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


    $scope.savePet = function(name, image, description) {
        console.log("name: ", name);
        console.log("image: ", image);
        console.log("description: ", description);

        description = subString(description);

        $http.post('/getpet', {
                content: {
                    name: name,
                    image: image,
                    description: description
                }
            })
            .then(function(response) {
                console.log("post response: ", response);
                if (response.status == 201) {
                    $scope.animalContent = "";
                    // getTasks();
                } else {
                    console.log("error posting new task");
                }
            });


    }



}]); // end barn controlller


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
}]); // end pig controller

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
}]); // end small furry controller

function subString(str) {
    if (str.length > 100) {
        str = str.substring(0, 100);
    }
    return str;
}
