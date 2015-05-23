angular.module('agrorganicos', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

   $routeProvider
   .when('/', {
<<<<<<< HEAD
        templateUrl: '/agrorganicos/app/views/home/home.html',
        controller: 'homeController'
    })
   .when('/nosotros', {
        templateUrl: '/agrorganicos/app/views/home/nosotros.html',
        controller: 'nosotrosController'
    })
   .when('/tips-y-recetas', {
        templateUrl: '/agrorganicos/app/views/home/tipsyrecetas.html',
        controller: 'tipsyrecetasController'
    })
   .when('/noticias', {
        templateUrl: '/agrorganicos/app/views/home/noticias.html',
        controller: 'noticiasController'
    })
   .when('/noticias/:id', {
        templateUrl: '/agrorganicos/app/views/home/noticias_single.html',
        controller: 'noticiasSingleController'
    }).otherwise({redirectTo:'/'});

   //$locationProvider.html5Mode(true).hashPrefix('!');
=======
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController'
    })
   .when('/nosotros', {
        templateUrl: 'app/views/home/nosotros.html',
        controller: 'nosotrosController'
    })
   .when('/tips-y-recetas', {
        templateUrl: 'app/views/home/tipsyrecetas.html',
        controller: 'tipsyrecetasController'
    });

   $locationProvider.html5Mode(true);
>>>>>>> Added features

}])

.controller('headerController', function($scope, $location){
    $scope.$watch(function () {
        return $location.path();
    }, function (val) {
        $scope.path = val;
    });
})

.controller('homeController', function($scope, $timeout){
    $scope.slides = [
        {image: 'http://zoraba.mx/agrorganicos/assets/imgs/slide1.jpg'},
        {image: 'http://zoraba.mx/agrorganicos/assets/imgs/slide2.jpg'},
        {image: 'http://zoraba.mx/agrorganicos/assets/imgs/slide3.jpg'},
        {image: 'http://zoraba.mx/agrorganicos/assets/imgs/slide4.jpg'}
    ];

    $scope.hs = false;

    $timeout(function () {
        $scope.hs = true;
    }, 200);
})

.controller('nosotrosController', function($scope, $timeout){

})

.controller('tipsyrecetasController', function($scope, $timeout){

})

<<<<<<< HEAD
.controller('noticiasController', function($scope, $http){
    $http.get('/wp-api/wp-json/posts').success(function (res) {
        $scope.news = res;
    });
})

.controller('noticiasSingleController', function($scope, $http, $routeParams) {
    $http.get('/wp-api/wp-json/posts/' + $routeParams.id).success(function (res) {
        console.log(res);
        $scope.new = res;
    });
})

=======
>>>>>>> Added features
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
        templateUrl: 'agrorganicos/app/directives/logo/template.html',
        replace: true
    }
})

.directive('experiences', function () {
    return {
        restrict: 'E',
        templateUrl: 'agrorganicos/app/directives/experiences/template.html',
        replace: true
    }
})

.directive('ourProducts', function () {
    return {
        restrict: 'E',
        templateUrl: 'agrorganicos/app/directives/ourProducts/template.html',
        replace: true,
        controller: function ($scope, $modal) {

            //colors: green orange red blue
            $scope.products = [
                {
                    name: 'Humus',
                    description: 'Es el resultado de la descomposición  de la materia orgánica por la acción digestiva de la lombriz, alguno de sus beneficios son: <ul><li>Mejora de la fertilidad del suelo</li><li>Retiene agua y minerales</li><li> Aporta nitrógeno, fósforo, potasio, magnesio, etc.</li><li>Potencializa el crecimiento de las plantas </li></ul>',
                    color: '-green',
<<<<<<< HEAD
                    image: 'http://zoraba.mx/agrorganicos/assets/imgs/hummus_back.jpg',
=======
                    image: 'assets/imgs/hummus_back.jpg',
>>>>>>> Added features
                    text: 'Este abono orgánico proviene de la descomposición de materia orgánica por la acción digestiva de la lombriz. Mejora la fertilidad del suelo,  retiene agua y minerales, aporta nitrógeno, fósforo, potasio, magnesio; potencializa el crecimiento de las plantas. Presentación sólida de 2 kg y líquida (lixiviado).',
                    subtitle: 'solido | lixiviado'
                },
                {
                    name: 'Nopal',
                    description: 'El consumo del nopal orgánico tiene más beneficios saludables ya que no usa pesticidas y fertilizantes artificales en la producción <ul><li>Los productos orgánicos se diferencian por: </li><li>Mejor sabor y color</li><li> Aporta más minerales y vitaminas</li><li>Protege la salud de consumidores y productores </li></ul>',
                    color: '-orange',
<<<<<<< HEAD
                    image: 'http://zoraba.mx/agrorganicos/assets/imgs/nopal_back.jpg',
=======
                    image: 'assets/imgs/nopal_back.jpg',
>>>>>>> Added features
                    text:'Producimos nopal orgánico libre de pesticidas y fertilizantes artificiales.Nopal cambray y en salmuera en bolsas de 1 kg.',
                    subtitle: 'cambray | salmuera'
                },
                {
                    name: 'Hortalizas',
                    description: 'el consumo de cultivos orgánicos tiene más beneficios saludables ya que no usa pesticidas y fertilizantes artificales en la producción <ul><li>Los productos orgánicos se diferencian por: </li><li>Mejor sabor y color</li><li> Aporta más minerales y vitaminas</li><li>Protege la salud de consumidores y productores </li><li>Pregunta por los productos de temporada</li></ul>',
                    color: '-red',
<<<<<<< HEAD
                    image: 'http://zoraba.mx/agrorganicos/assets/imgs/hortalizas_back.jpg',
=======
                    image: 'assets/imgs/hortalizas_back.jpg',
>>>>>>> Added features
                    text:'Lombriz roja californiana (Lumbricus rubellus) es la más usada por su reproduccion, alimentación, secreción y docilidad. Favorece la fertilidad de la tierra.Proporciona permeabilidad para el aire y para el agua.Aumenta la retención de agua y la capacidad de almacenar y liberar los nutrientes.',
                    subtitle: ''
                   
                },
                {
                    name: 'Lombriz',
                    description: 'consulta el calendarios de cusos',
                    color: '-blue',
<<<<<<< HEAD
                    image: 'http://zoraba.mx/agrorganicos/assets/imgs/lombriz_back.jpg',
=======
                    image: 'assets/imgs/lombriz_back.jpg',
>>>>>>> Added features
                    text:'Nuestros productos orgánicos tienen mejor sabor y color, aportan más minerales y vitaminas.Tenemos desde germinados o plántulas hasta el  producto terminado. Rábano, cebolla, chile serrano, espinaca, lechuga, acelga. Pregunta por los productos de temporada. ',
                    subtitle: 'plántula | producto terminado'
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
        templateUrl: 'agrorganicos/app/directives/postsWidget/template.html',
        replace: true
    }
})

.filter('unsafe', function($sce) { return $sce.trustAsHtml; });;
