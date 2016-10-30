'use strict';

var owmApp = angular.module('owmApp', ['ngRoute', 'ngAnimate']); //  This gives access to the $routeProvider, $routeParams and $route

owmApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: "homeCtrl"
    }).when('/city/:city', { // This states the /:city will be the first returned as $routeParams.city
        templateUrl: 'city.html', //this will be the HTML file used
        controller: 'cityCtrl', //The controller to be useable on this ng-view
        resolve: { // resolve will only return the information once its code block has ran - useful for when data must be retrieved from a DB
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
        template: '<p>Error - Page Not Found</p>' // note this uses template NOT templateUrl as you can see from the whitelist if statement above the path will be set to /error if the city doesn't exist in the whitelist cityArr value
    }).otherwise('/error');
}]).run(function ($rootScope, $location, $timeout) {
    $rootScope.$on('$routeChangeError', function () {
        $location.path('/error');
    });
    $rootScope.$on('$routeChangeStart', function () {
        console.log('true');
        $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            console.log('false');
            $rootScope.isLoading = false;
        }, 1000);
    });
});

owmApp.value('cityArr', ['New York', 'Dallas', 'CHI']);

owmApp.controller('homeCtrl', function ($scope) {
    //Empty Controller
});

owmApp.controller('cityCtrl', function ($scope, $routeParams, city) { //uses the $routeParams service which is built in to AngularJS - ngRoute 
    $scope.city = city;
});