'use strict';

angular.module('myApp',[]).controller("myController",function($scope,$http){
    $http({method: 'GET', url: 'http://localhost:8000/rest-mock/entities.json'}).
        success(function(data) {
            $scope.model=data;
        });
});
