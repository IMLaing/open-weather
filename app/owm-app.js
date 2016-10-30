'use strict';

var owmApp = angular.module('owmApp', ['ngRoute']);

owmApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: "homeCtrl"
    }).when('/city/:city', { // This states the /:city will be the first returned as $routeParams.city
        templateUrl: 'city.html', //this will be the HTML file used
        controller: 'cityCtrl', //The controller to be useable on this ng-view
        resolve: {
            city: function (cityArr, $route, $location) {
                var city = $route.current.params.city;
                if (cityArr.indexOf(city) === -1) {
                    $location.path('/error');
                    return;
                }
                return city;
            }
        }
    }).when('/error', {
        template: '<p>Error - Page Not Found</p>' // as you can see from the whitelist if statement above the path will be set to /error if the city doesn't exist in the whitelist cityArr value
    });
}]);

owmApp.value('cityArr', ['New York', 'Dallas', 'CHI']);

owmApp.controller('homeCtrl', function ($scope) {
    //Empty Controller
});

owmApp.controller('cityCtrl', function ($scope, $routeParams, cityArr) { //uses the $routeParams service which is built in to AngularJS - ngRoute 
    var cityCurrent = $routeParams.city; //the city variable in the html gets ther parameter of city for the cityCurrent
    if (cityArr.indexOf(cityCurrent) === -1) {
        console.log('city not found');
        return;
    }
    $scope.city = cityCurrent; //this is the else of the if statement
});