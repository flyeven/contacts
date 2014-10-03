(function () {
    var app = angular.module("contact", []);

    app.service('ContactModel', ['$http', 'MessageService', function ($http, messageService) {
        var _this = this;

        this.contacts = [];
        this.searchTerm = null;


        $http.get("mock.json").success(function (data) {
            _this.contacts = data;
        }).error(function (data, status, header, config) {
            messageService.add("danger", "An error occured while loading your contacts.");
        });
        this.selected = null;

        this.isSelected = function (id) {
            return !(this.selected === null) && this.selected.id === id;
        };
        this.isAnySelected = function () {
            return this.selected != null;
        };
        this.select = function (id) {
            this.selected = null;
            for (var i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id === id) {
                    this.selected = this.contacts[i];
                }
            }
        };
    }]);
})();
