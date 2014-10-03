(function () {
    var app = angular.module("list", ["contact"]);

    app.directive('contactList', function () {
        return {
            restrict: "E",
            templateUrl: "template/list.html",
            controller: ['$scope', 'ContactModel', function ($scope, contactModel) {
                $scope.contactModel = contactModel;
                this.searchTerm = null;
            }],
            controllerAs: 'list'
        };
    });
})();