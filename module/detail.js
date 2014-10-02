(function () {
    var app = angular.module('detail', ['contact', 'message']);

    app.directive('contactDetails', function () {
        return {
            restrict: "E",
            templateUrl: "template/detail.html",
            controller: ['$scope', 'ContactModel', 'MessageService', function ($scope, contactModel, messageService) {
                $scope.contactModel = contactModel;
                $scope.editMode = false;
                $scope.startEdit = function (contact) {
                    $scope.editMode = true;
                };
                $scope.save = function () {
                    $scope.editMode = false;
                    messageService.add('success', 'Contact saved.');
                };
                $scope.cancel = function () {
                    $scope.editMode = false;
                };
            }],
            controllerAs: 'details'
        };
    });

    app.controller('TabsController', function ($scope) {
    });
})();