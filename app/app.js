angular.module('agrorganicos', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

     $routeProvider.
      when('/', {
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
      });

}])

.controller('headerController', function($scope){
    
})

.controller('homeController', function($scope){
    console.log($scope);
})

.directive('agrLogo', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/logo/template.html',
        replace: true
    }
})

.directive('experiences', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/experiences/template.html',
        replace: true
    }
})

.directive('ourProducts', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/ourProducts/template.html',
        replace: true
    }
})

.directive('postsWidget', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/postsWidget/template.html',
        replace: true
    }
});
