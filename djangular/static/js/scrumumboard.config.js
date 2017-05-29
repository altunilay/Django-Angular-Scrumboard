(function (){
    'use strict';
    angular.module('scrumumboard.demo')
        .config(['$routeProvider', config])
        .run(['$http',run]);

    function config($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: '/static/html/scrumumboard.html',
                controller: 'ScrumumboardController',
            })
            .when('/login', {
                templateUrl: '/static/html/login.html'
            })
            .otherwise('/');
    }
    function run($http){
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();