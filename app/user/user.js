(function () {
    var app = angular.module("user", ['directive.g+signin', 'google']);

    app.directive("signIn", function () {
        return {
            restrict: "E",
            templateUrl: "app/user/signIn.html",
            controller: ['$scope', '$http', 'UserModel', 'ContactModel', 'GoogleService', function ($scope, $http, userModel, contactModel, googleService) {
                $scope.userModel = userModel;

                $scope.$on('event:google-plus-signin-success', function (event, authResult) {
                    gapi.client.load('oauth2', 'v2', function () {
                        gapi.client.oauth2.userinfo.get().execute(function (obj) {
                            userModel.signIn(authResult, obj);
                            googleService.getAllContacts(userModel.auth.access_tokenId, function (data) {
                                contactModel.processContacts(data, $scope);
                            });
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
            console.log(auth);
            console.log(user);
            this.auth = auth;
            this.user = user;
            this.signedIn = true;
        };
    });
})();