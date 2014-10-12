(function () {
    var app = angular.module("message", []);

    app.service('MessageService', ['$rootScope', function ($rootScope) {
        var _this = this;
        this.messages = [];
        var msgCount = 0;
        this.add = function (type, msg, scope) {
            var id = getId();
            this.messages.push({id: id, type: type, msg: msg});
           /* setTimeout(function () {
                removeMessage(getIndexForId(id));
                $rootScope.$apply();
            }, 5000);*/
        };
        this.close = function (id) {
            removeMessage(id);
        };

        var getId = function () {
            return msgCount++;
        };
        var getIndexForId = function (id) {
            for (var i = 0; i < _this.messages.length; i++) {
                if (_this.messages[i].id === id) {
                    return i;
                }
            }
            return undefined;
        };
        var removeMessage = function (id) {
            _this.messages.splice(getIndexForId(id), 1);
        };
    }]);

    app.directive('contactMessages', function () {
        return{
            restrict: "E",
            templateUrl: "app/message/messages.html",
            controller: ['$scope', 'MessageService', function ($scope, messageService) {
                $scope.alerts = messageService.messages;

                $scope.closeAlert = function (id) {
                    messageService.close(id);
                };
            }],
            controllerAs: 'contact-messages'
        };
    });
})();
