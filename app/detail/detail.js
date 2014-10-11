(function () {
    var app = angular.module('detail', ['contact', 'message']);

    app.directive('contactDetails', function () {
        return {
            restrict: "E",
            templateUrl: "template/detail.html",
            controller: ['$scope', '$sce', 'ContactModel', 'MessageService', function ($scope, $sce, contactModel, messageService) {
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


                $scope.getMapUrl = function(address) {
                    console.log($sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + address + "&key=AIzaSyCIeh8Kawd2K-rDDntpbn5YgW9375HYZe8"));
                    return $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + address + "&key=AIzaSyCIeh8Kawd2K-rDDntpbn5YgW9375HYZe8");
                };
                $scope.getFirstTabLabel = function (firstName) {
                    return firstName != null && firstName.length > 0 ? firstName : "Details";
                };
            }],
            controllerAs: 'details'
        };
    });

    app.controller('TabsController', function ($scope) {
    });
})();