(function(){
    'use strict';

    angular.module('scrumumboard.demo')
        .directive('scrumumboardCard', CardDirective);

    function  CardDirective() {
        return {
            templateUrl: '/static/html/card.html',
            restrict: 'E',
            controller: ['$scope','$http', function($scope,$http){
                var url = '/scrumumboard/cards/'+$scope.card.id+'/';
                $scope.update = function () {
                    $http.put(
                        url,
                        $scope.card
                    );
                };
                $scope.delete = function () {
                    $http.delete(url).then(
                        function() {
                            var cards = $scope.list.cards;
                            cards.splice(
                                cards.indexOf($scope.card), 1
                            );
                        }
                    );
                };

                $scope.modelOptions = {
                  debounce: 500
                };
            }]
        };
    }
})();