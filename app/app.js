(function () {
    var app = angular.module('contacts', ['ngAnimate', 'ui.bootstrap', 'search', 'list', 'message', 'detail', 'user', 'footer', 'menu']);

    app.controller('AppController', ['$window', '$scope', '$rootScope', 'UserModel', function ($window, $scope, $rootScope, userModel) {
        $scope.userModel = userModel;

        /*this.processKeyPress = function (keyEvent) {
            console.log("keyPress");
            if (keyEvent.which === 40) { // down arrow
                console.log("downArrow");
                $rootScope.$broadcast('event:next-contact');
            } else if (keyEvent.which === 38) { // up arrow
                $rootScope.$broadcast('event:prev-contact');
            } else if (keyEvent.which === 39) { // right arrow
                $rootScope.$broadcast('event:next-tab');
            } else if (keyEvent.which === 37) { // left arrow
                $rootScope.$broadcast('event:prev-tab');
            }
        };*/

        $window.addEventListener("keydown", function(e) {
            console.log("keydown");
            if(e.keyCode === 40) {
                console.log("arrow down");
                $rootScope.$broadcast('event:next-contact');
                e.preventDefault();
            }
        }, false);
    }]);



    /*app.directive('ngKeyboardShortcuts', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 40) {
                    $rootScope.$broadcast('event:next-contact');

                    event.preventDefault();
                }
            });
        };
    });*/

})();