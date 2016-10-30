'use strict';

angular.module('owmApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: "homeCtrl"
        }).when('/city/:city', { // This states the /:city will be the first returned as $routeParams.city
            templateUrl: 'city.html',
            controller: 'cityCtrl'
        });
    }])
    .controller('homeCtrl', function ($scope) {
        //Empty Controller
    })
    .controller('cityCtrl', function ($scope, $routeParams) { //uses the $routeParams service which is built in to AngularJS - ngRoute 
        var cityCurrent = $routeParams.city; //the city variable in the html gets ther parameter of city for the cityCurrent
        if (owmcities.indexOf(city) === -1) {
            console.log('city not found');
            return;
        }
        $scope.city = cityCurrent;
    })
    .value('owmCities', ['NewYork', 'Dallas', 'Chicago']);