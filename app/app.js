angular.module('agrorganicos', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

   $routeProvider.
   when('/', {
    templateUrl: 'app/views/home/home.html',
    controller: 'homeController'
});

   $locationProvider.html5Mode(true);

}])

.controller('headerController', function($scope){

})

.controller('homeController', function($scope){
    console.log($scope);
})

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, product) {

    $scope.product = product;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
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
        replace: true,
        controller: function ($scope, $modal) {

            //colors: green orange red blue
            $scope.products = [
                {
                    name: 'Humus',
                    description: 'Text text text text text text text text text text text text text text text text text text text text',
                    color: 'green'
                }
            ];

            $scope.open = function (size) {

                var modalInstance = $modal.open({
                  templateUrl: 'myModalContent.html',
                  controller: 'ModalInstanceCtrl',
                  size: size,
                  resolve: {
                    product: function () {
                      return $scope.product;
                  }
              }
          });

                modalInstance.result.then(function () {}, function () {});
            };
        }
    }
})

.directive('postsWidget', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/postsWidget/template.html',
        replace: true
    }
});
