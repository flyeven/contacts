(function () {
    var app = angular.module("list", ["contact"]);

    app.directive('contactList', function () {
        return {
            restrict: "E",
            templateUrl: "app/list/list.html",
            controller: ['$scope', 'ContactModel', function ($scope, contactModel) {
                $scope.contactModel = contactModel;
            }],
            controllerAs: 'list'
        };
    });

    app.directive('addContact', function () {
        return {
            restrict: "E",
            templateUrl: "app/list/add.html",
            controller: ['$scope', function ($scope) {
                $scope.add = function () {
                    // TODO
                };
            }]
        };
    });
})();