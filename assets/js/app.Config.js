(function() {
    'use strict';

    SomeConfig.$inject = [
        '$routeProvider'
    ];

    function SomeConfig($routeProvider) {
        $routeProvider.

        when('/home', {
            templateUrl: 'assets/templates/aboutme.html',
            title: 'Thomas Ortiz - Home'
        }).

        when('/projects', {
            templateUrl: 'assets/templates/projects.html',
            title: 'Thomas Ortiz - Projects'
        }).
        
        when('/calandar', {
            templateUrl: 'assets/templates/calandar.html',
            title: 'Thomas Ortiz - My Calandar'
        }).
        
        when('/resume', {
            templateUrl: 'assets/templates/resume.html',
            title: 'Thomas Ortiz - Resume'
        }).

        when('/baseConverter', {
            templateUrl: 'assets/templates/baseConverter.html',
            title: 'Thomas Ortiz - Base Converter',
            controller : 'baseCtrl'
        }).

        otherwise({
            redirectTo: '/home'
        });
    }
    
    angular.module('myPage')
       .config(SomeConfig);

})();