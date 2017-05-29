(function(){
                'use strict';
                angular.module('scrumumboard.demo',['ngRoute'])
                    .controller('ScrumumboardController', [ '$scope', '$http', ScrumumboardController]);

                function ScrumumboardController($scope, $http){
                    $scope.add = function (list,title){
                        var card={
                            list: list.id,
                            title: title
                        };
                        $http.post('/scrumumboard/cards/', card)
                            .then(function(response){
                                list.cards.push(response.data);
                            },
                            function(){
                                alert('Could not create card');
                            });
                    };
                    $scope.login = function () {
                        $http.post('/auth_api/login/', {username: 'nilayaltun', password: 'nilay123'});
                    };

                    $scope.data=[];
                    $http.get('/scrumumboard/lists/').then(function(response){
                        $scope.data=response.data;

                    });
                }
            }());
