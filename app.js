(function () {
    var app = angular.module('contacts', ['ui.bootstrap', 'search', 'list', 'message', 'detail', 'user', 'footer']);

    app.controller('AppController', ['$scope', 'UserModel', function ($scope, userModel) {
        $scope.userModel = userModel;
    }]);

})();