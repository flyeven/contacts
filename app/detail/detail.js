(function () {
    var app = angular.module('detail', ['contact', 'message']);

    app.directive('contactDetails', function () {
        return {
            restrict: "E",
            templateUrl: "app/detail/detail.html",
            controller: ['$scope', '$sce', 'ContactModel', 'MessageService', function ($scope, $sce, contactModel, messageService) {
                var _this = this;
                $scope.contactModel = contactModel;
                this.editMode = false;
                this.getEditButtonText = function () {
                    return _this.editMode ? "Save" : "Edit";
                };
                this.toggleEdit = function () {
                    if (this.editMode) {
                        return save();
                    } else {
                        return startEdit();
                    }
                };
                var startEdit = function () {
                    _this.editMode = true;
                };
                var save = function () {
                    _this.editMode = false;
                    console.log(messageService.success('Contact saved.', function () {
                        alert("reverted!");
                    }));
                };
                this.cancel = function () {
                    _this.editMode = false;
                };
                this.del = function () {
                    console.log(messageService.success('Contact deleted.', null, function () {
                        alert("closed");
                    }));
                };


                $scope.getMapUrl = function (address) {
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