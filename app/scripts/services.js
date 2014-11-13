/**
 * Created by Ritsaart on 9-11-2014.
 */
'use strict';

/* Services */

var projectServices = angular.module('projectServices', ['ngResource']);

projectServices.factory('Foos', ['$resource',
  function($resource){
    return $resource('foo/:fooId.json', {}, {
      getAllFoo: {method:'GET', params:{fooId:'foos'}, isArray:true}
    });
  }]);
