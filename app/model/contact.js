(function () {
    var app = angular.module("contact", []);

    app.service('ContactModel', ['$window', '$http', '$rootScope', 'MessageService', 'GoogleService', function ($window, $http, $rootScope, messageService, googleService) {
        var _this = this;

        this.contacts = [];
        this.filterTerm = null;

        this.selected = null;

        this.getFilteredContacts = function () {
            var filterTerm = getFilterTerm();
            if (!!filterTerm) {
                return _this.contacts.filter(function (element) {
                    return element.name.toLowerCase().indexOf(filterTerm) != -1;
                });
            } else {
                return _this.contacts;
            }
        };

        this.processContacts = function (data, refScope) {
            var entries = data.feed.entry;
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];

                var contact = new Contact(/[^/]*$/.exec(entry.id.$t)[0], entry.title.$t);

                if (contact.name.length > 0) {
                    this.contacts.push(contact);
                }
            }
            this.contacts.sort(function (a, b) {
                return a.compareTo(b);
            });
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

            if (this.selected != null) {
                googleService.getContact(id, function (data) {
                    var entry = data.entry;
                    if (entry.hasOwnProperty("gd$postalAddress")) {
                        for (var j = 0; j < entry.gd$postalAddress.length; j++) {
                            _this.selected.address.push({
                                location: entry.gd$postalAddress[j].$t.split('\n'),
                                joined: entry.gd$postalAddress[j].$t,
                                type: entry.gd$postalAddress[j].rel.split("#")[1]
                            });
                        }
                        ;
                    }
                    if (entry.hasOwnProperty("gd$phoneNumber")) {
                        _this.selected.phone = [];
                        for (var j = 0; j < entry.gd$phoneNumber.length; j++) {
                            _this.selected.phone.push(entry.gd$phoneNumber[0].$t);
                        }
                    }
                    $rootScope.$apply(function () {
                    });

                    console.log(_this.selected);
                });
            }
        };
        var getFilterTerm = function () {
            if (!!_this.filterTerm) {
                return _this.filterTerm.toLowerCase();
            } else {
                return null;
            }
        };
        $rootScope.$on('event:next-contact', function () {
            console.log("eventHandler");
            var length = _this.contacts.length;
            for (var i = 0; i < length; i++) {
                if (_this.contacts[i] === _this.selected) {
                    if (i < length - 1) {
                        _this.selected = _this.contacts[i + 1];
                    }
                    break;
                }
            }
        });

    }]);
})();
