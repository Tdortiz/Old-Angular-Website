(function() {
    'use strict';

    SomeConfig.$inject = [
        '$routeProvider'
    ];

    function SomeConfig($routeProvider) {
        $routeProvider.

        when('/home', {
            templateUrl: 'templates/home.html',
            title: 'TO - Home'
        }).

        when('/projects', {
            templateUrl: 'templates/projects.html',
            title: 'TO - Projects'
        }).
        
        when('/calandar', {
            templateUrl: 'templates/calandar.html',
            title: 'TO - My Calandar'
        }).
        
        when('/resume', {
            templateUrl: 'templates/resume.html',
            title: 'TO - Resume'
        }).

        when('/baseConverter', {
            templateUrl: 'templates/baseConverter.html',
            title: 'TO - Base Converter',
            controller : 'baseCalculatorCtrl'
        }).

        otherwise({
            redirectTo: '/home'
        });
    }
    
    angular.module('myPage')
       .config(SomeConfig);

})();