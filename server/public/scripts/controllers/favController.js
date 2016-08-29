myApp.controller('favController', ['$scope', '$http', function($scope, $http) {

    console.log("favController working!");
    $scope.animals = [];
    getFavs();

    // retrieve favorited animals from the server
    // why does this not need $scope. in front?
    function getFavs() {
        $http.get('/getpet').then(function(response) {
            console.log('data', response.data);
            $scope.animals = response.data;
        });

    }

    // delete this task from the server
    $scope.deleteFav = function(id) {
        if (confirm("Delete this favorited animal??!")) {
            console.log('delete animal id ', id);
            $http.delete('/getpet/' + id).then(function(response) {
                if (response.status == 202) {
                    getFavs();
                } else {
                    console.log('error deleting fav animal');
                }
            });
        };
    }

}]); // end controlller
