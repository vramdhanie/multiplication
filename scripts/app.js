angular.module('multiApp', [])
    .controller('MultiplicationController', function($scope, $attrs, $rootScope){

        $scope.populateNumbers = function(x){
            var numbers = [];
            for(var i = 0; i < x; i++){
                numbers[i] = i + 1;
            }
            return numbers;
        };

        $scope.compute = function(a, b){
            return a * b;
        };

        $scope.$watch('numberLimit', function(limit){
            $scope.numbers = $scope.populateNumbers(limit);
        });

        $scope.numberLimit = $attrs.initialNumberLimit || 10;

        var activeFactorA, activeFactorB;
        $scope.setActiveFactors = function(a, b) {
          activeFactorA = a;
          activeFactorB = b;
        };

        $scope.matchesFactor = function (a, b) {
          return a === activeFactorA || b === activeFactorB;
        };

        $scope.clearActiveFactors = function(){
          activeFactorA = null;
          activeFactorB = null;
        }

        $scope.setActiveNumber = function(number){
            $rootScope.$broadcast('display', number);
        }

    })
    .controller('DisplayController', function($scope){
       $scope.$on('display', function(event, data){
         $scope.content = data;
       });
    });
