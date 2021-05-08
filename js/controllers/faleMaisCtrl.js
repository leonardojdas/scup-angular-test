angular.module("faleMais").controller("faleMaisCtrl", function ($scope, details, plans, pricing){

    $scope.details = details.data.data;
    $scope.plans = plans.data.data;
    $scope.pricing = pricing.data.data;

    var init = function () {
        $scope.isOpened = false;
        $scope.minutes = "";
        $scope.origin = "";
    };

    $scope.toggle = function () {
        $scope.isOpened = !$scope.isOpened;
    };

    $scope.setOrigin = function (input) {
        $scope.origin = input;
    };

    $scope.selected = function (ddd) {
        if($scope.origin === "from") $scope.from = ddd;
        if($scope.origin === "to") $scope.to = ddd;
        if(($scope.from) && ($scope.to)) {
            $scope.rate = getRate();
            // checkCombination();
        }
    };

    var getRate = function () {
        for (var i in $scope.pricing) {
            if(($scope.pricing[i].origin === $scope.from) && ($scope.pricing[i].destiny === $scope.to))
                return $scope.pricing[i].price;
        };
        return false;
    };

    var checkCombination = function () {
        if (!$scope.rate) {
            $scope.from = "";
            $scope.to = "";
            $scope.minutes = "";
        };
    };

    init();

});