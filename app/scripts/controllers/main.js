'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectApp
 */
var projectApp = angular.module('projectApp', []);
  projectApp.controller('MainCtrl', function ($scope, Foo) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'test'

    ];
    $scope.headers = [
      {name: 'HTML5', property: 'cool'}
    ];
    $scope.foos = Foo.getAllFoo();
    console.log(Foo.getAllFoo());
    });

  projectApp.controller('foodetailController', ['$scope', '$routeParams', 'Foos', function($scope, routeParams, Foo) {
    $scope.foo = Foo.get({fooId: $routeParams.phoneId})

    }]);
