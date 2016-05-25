'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.run(function ($rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
    });
})

juke.config(function ($urlRouterProvider, $locationProvider) {
    // when there is an empty route, redirect to /index
    $urlRouterProvider.when('/', '/albums');
    $urlRouterProvider.when('/artists/:artist', '/artists/:artist/albums');
    //take out the hash out of the url (remember to add <base href="/"> tag to html)
    $locationProvider.html5Mode(true);
})