(function () {
    var app = angular.module("menu", ['user']);

    app.directive("menubar", function () {
        return {
            restrict: "E",
            templateUrl: "app/menu/menu.html",
            controller: ['$scope', 'UserModel', function ($scope, userModel) {
                $scope.userModel = userModel;
            }],
            controllerAs: "menu"
        };
    });
})();