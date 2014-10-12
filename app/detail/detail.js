(function () {
    var app = angular.module('detail', ['contact', 'message']);

    app.directive('contactDetails', function () {
        return {
            restrict: "E",
            templateUrl: "app/detail/detail.html",
            controller: ['$scope', '$sce', 'ContactModel', 'MessageService', function ($scope, $sce, contactModel, messageService) {
                $scope.contactModel = contactModel;
                this.editMode = false;
                this.startEdit = function (contact) {
                    this.editMode = true;
                };
                this.save = function () {
                    this.editMode = false;
                    messageService.add('success', 'Contact saved.', $scope);
                };
                this.cancel = function () {
                    this.editMode = false;
                };
                this.del = function () {

                };


                $scope.getMapUrl = function(address) {
                    console.log($sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + address + "&key=AIzaSyCIeh8Kawd2K-rDDntpbn5YgW9375HYZe8"));
                    return $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + address + "&key=AIzaSyCIeh8Kawd2K-rDDntpbn5YgW9375HYZe8");
                };
                $scope.getFirstTabLabel = function (firstName) {
                    return firstName != null && firstName.length > 0 ? firstName : "Details";
                };
            }],
            controllerAs: 'vm'
        };
    });

    app.controller('TabsController', function ($scope) {
    });
})();