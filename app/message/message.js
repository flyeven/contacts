(function () {
    var app = angular.module("message", []);

    app.service('MessageService', function () {
        this.messages = [];
        this.add = function (type, msg) {
            this.messages.push({type: type, msg: msg});
        };
        this.close = function (index) {
            this.messages.splice(index, 1);
        }
    });

    app.directive('contactMessages', function () {
        return{
            restrict: "E",
            templateUrl: "template/messages.html",
            controller: ['$scope', 'MessageService', function ($scope, messageService) {
                $scope.alerts = messageService.messages;

                $scope.closeAlert = function (index) {
                    messageService.close(index);
                };
            }],
            controllerAs: 'contact-messages'
        };
    });
})();
