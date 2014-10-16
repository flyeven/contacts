(function () {
    var app = angular.module("message", []);

    app.service('MessageService', ['$rootScope', function ($rootScope) {
        var _this = this;

        var messages = [];
        var msgCount = 0;

        this.success = function (msg, revertCallback, closeCallback) {
            return add('success', msg, revertCallback, closeCallback);
        };
        this.danger = function (msg, revertCallback, closeCallback) {
            return add('danger', msg, revertCallback, closeCallback);
        };
        this.warning = function (msg, revertCallback, closeCallback) {
            return add('warning', msg, revertCallback, closeCallback);
        };
        this.info = function (msg, revertCallback, closeCallback) {
            return add('info', msg, revertCallback, closeCallback);
        };

        this.close = function (id) {
            var message = getMessage(id);
            if (message != undefined) {
                message.closeMessage();
                messages.splice(getIndexForId(id), 1);
            }
        };

        this.getMessages = function () {
            return messages.slice().reverse();
        };

        var add = function (type, msg, revertCallback, closeCallback) {
            var id = createId();
            var message = new Message(id, type, msg, revertCallback, closeCallback);
            messages.push(message);
            setTimeout(function () {
                $rootScope.$apply(_this.close(id));
            }, 8000);
            return id;
        };

        var createId = function () {
            return msgCount++;
        };
        var getMessage = function (id) {
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].id === id) {
                    return messages[i];
                }
            }
            return undefined;
        };
        var getIndexForId = function (id) {
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].id === id) {
                    return i;
                }
            }
            return undefined;
        };
    }]);

    app.directive('contactMessages', function () {
        return{
            restrict: "E",
            templateUrl: "app/message/messages.html",
            controller: ['$scope', 'MessageService', function ($scope, messageService) {
                $scope.messageService = messageService;
            }],
            controllerAs: 'vm'
        };
    });
})();
