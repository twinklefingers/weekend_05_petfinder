var myApp = angular.module('myApp', ['ngRoute']);


// used with partials
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/barn', {
        templateUrl: "/views/partials/barn.html",
        controller: "barnController"
    }).
    when('/pig', {
        templateUrl: "/views/partials/pig.html",
        controller: "pigController"
    }).
    when('/smallfurry', {
        templateUrl: "/views/partials/smallfurry.html",
        controller: "smallFurryController"
    }).
    otherwise({
        redirectTo: "/home"
    });
}]);
