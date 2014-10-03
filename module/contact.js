(function () {
    var app = angular.module("contact", []);

    app.service('ContactModel', ['$http', 'MessageService', function ($http, messageService) {
        this.contacts = [];
        this.searchTerm = null;

        this.selected = null;

        this.loadData = function(data, refScope) {
            var entries = data.feed.entry;
            for(var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                this.contacts.push({
                    id: entry.id.$t,
                    firstName: "",
                    lastName: entry.title.$t
                });
            };
            refScope.$apply(function () {
                
            });
        };

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
