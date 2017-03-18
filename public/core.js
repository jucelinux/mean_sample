// public/core.js
var scotchTodo = angular.module('angularApp', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/horaAtual')
        .success(function(data) {
            $scope.data = data.text;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.enviaInfo = function() {
        $http.post('/ok', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.data = data.text;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}