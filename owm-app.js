angular.module('owmApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateURL: 'home.html',
            controller: "homeCtrl"
        });
    }])
    .controller('homeCtrl', function ($scope) {

    });