angular.module('owmApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: "homeCtrl"
        }).when('/city', {
            templateUrl: 'city.html',
            controller: 'cityCtrl'
        });
    }])
    .controller('homeCtrl', function ($scope) {

    })
    .controller('cityCtrl', ['$routeParams', function ($scope, $routeParams)] {
        $scope.city = $routeParams.city;


    });