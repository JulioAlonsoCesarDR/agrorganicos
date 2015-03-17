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

.controller('homeController', function($scope, $timeout){
    $scope.slides = [
        {image: 'assets/imgs/slide1.jpg'},
        {image: 'assets/imgs/slide2.jpg'},
        {image: 'assets/imgs/slide3.jpg'},
        {image: 'assets/imgs/slide4.jpg'}
    ];

    $scope.hs = false;

    $timeout(function () {
        $scope.hs = true;
    }, 200);
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
                    description: 'Es el resultado de la descomposición  de la materia orgánica por la acción digestiva de la lombriz, alguno de sus beneficios son: <ul><li>Mejora de la fertilidad del suelo</li><li>Retiene agua y minerales</li><li> Aporta nitrógeno, fósforo, potasio, magnesio, etc.</li><li>Potencializa el crecimiento de las plantas </li></ul>',
                    color: '-green',
                    image: 'assets/imgs/hummus_back.jpg',
                    text: 'Este abono orgánico proviene de la descomposición de materia orgánica por la acción digestiva de la lombriz. Mejora la fertilidad del suelo,  retiene agua y minerales, aporta nitrógeno, fósforo, potasio, magnesio; potencializa el crecimiento de las plantas. Presentación sólida de 2 kg y líquida (lixiviado).'
                },
                {
                    name: 'Nopal',
                    description: 'El consumo del nopal orgánico tiene más beneficios saludables ya que no usa pesticidas y fertilizantes artificales en la producción <ul><li>Los productos orgánicos se diferencian por: </li><li>Mejor sabor y color</li><li> Aporta más minerales y vitaminas</li><li>Protege la salud de consumidores y productores </li></ul>',
                    color: '-orange',
                    image: 'assets/imgs/nopal_back.jpg',
                    text:'Producimos nopal orgánico libre de pesticidas y fertilizantes artificiales.Nopal cambray y en salmuera en bolsas de 1 kg.'
                },
                {
                    name: 'Hortalizas',
                    description: 'el consumo de cultivos orgánicos tiene más beneficios saludables ya que no usa pesticidas y fertilizantes artificales en la producción <ul><li>Los productos orgánicos se diferencian por: </li><li>Mejor sabor y color</li><li> Aporta más minerales y vitaminas</li><li>Protege la salud de consumidores y productores </li><li>Pregunta por los productos de temporada</li></ul>',
                    color: '-red',
                    image: 'assets/imgs/hortalizas_back.jpg',
                    text:'Lombriz roja californiana (Lumbricus rubellus) es la más usada por su reproduccion, alimentación, secreción y docilidad. Favorece la fertilidad de la tierra.Proporciona permeabilidad para el aire y para el agua.Aumenta la retención de agua y la capacidad de almacenar y liberar los nutrientes.'
                   
                },
                {
                    name: 'Cursos',
                    description: 'consulta el calendarios de cusos',
                    color: '-blue',
                    image: 'assets/imgs/lombriz_back.jpg',
                    text:'Nuestros productos orgánicos tienen mejor sabor y color, aportan más minerales y vitaminas.Tenemos desde germinados o plántulas hasta el  producto terminado. Rábano, cebolla, chile serrano, espinaca, lechuga, acelga. Pregunta por los productos de temporada. '
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
})

.filter('unsafe', function($sce) { return $sce.trustAsHtml; });;
