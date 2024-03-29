(function () {
    var app = angular.module("search", ['contact']);

    app.directive("contactSearch", function () {
        return {
            restrict: "E",
            templateUrl: "app/search/search.html",
            controller: ['$scope', 'ContactModel', function ($scope, contactModel) {
                $scope.contactModel = contactModel;
            }],
            controllerAs: "search"
        };
    });
})();