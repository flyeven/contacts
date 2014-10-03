(function () {
    var app = angular.module("user", ['directive.g+signin']);

    app.directive("signIn", function () {
        return {
            restrict: "E",
            templateUrl: "template/signIn.html",
            controller: ['$scope', 'UserModel', function ($scope, userModel) {
                $scope.userModel = userModel;

                $scope.$on('event:google-plus-signin-success', function (event, authResult) {
                    gapi.client.load('oauth2', 'v2', function () {
                        gapi.client.oauth2.userinfo.get().execute(function (obj) {
                            userModel.signIn(authResult, obj);
                            $scope.$apply(function () {
                        });
                    });

                    });
                });
                $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
                    alert("Error");
                    //TODO
                });

            }],
            controllerAs: "user"
        };
    });

    app.service("UserModel", function () {
        this.signedIn = false;
        this.auth = {};
        this.user = {};

        this.isSignedIn = function () {
            return this.signedIn;
        };
        this.signIn = function (auth, user) {
            this.auth = auth;
            this.user = user;
            this.signedIn = true;
        };
    });
})();