(function () {
    var app = angular.module("user", ['directive.g+signin']);

    app.directive("signIn", function () {
        return {
            restrict: "E",
            templateUrl: "template/signIn.html",
            controller: ['$scope', '$http', 'UserModel', 'ContactModel', function ($scope, $http, userModel, contactModel) {
                $scope.userModel = userModel;

                $scope.$on('event:google-plus-signin-success', function (event, authResult) {
                    gapi.client.load('oauth2', 'v2', function () {
                        gapi.client.oauth2.userinfo.get().execute(function (obj) {
                            userModel.signIn(authResult, obj);
                            gapi.client.request({
                                path: "/m8/feeds/contacts/default/full?token_access="+userModel.auth.access_tokenId+"&alt=json&max-results=10000",
                                method: "GET",
                                callback: function (data) {
                                    contactModel.loadData(data, $scope);
                                }
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