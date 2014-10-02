(function () {
    var app = angular.module("contact", []);

    app.service('ContactModel', function () {
        this.contacts = persons;
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
    });

    var persons = [
        {
            id: 0,
            firstName: "Max",
            lastName: "Muster",
            subtitle: "IT Consultant"
        },
        {
            id: 1,
            firstName: "Martha",
            lastName: "Müller",
            subtitle: "Mason"
        },
        {
            id: 2,
            firstName: "Hans",
            lastName: "Huber",
            subtitle: "Investment Banker"
        },
        {
            id: 3,
            firstName: "Mario",
            lastName: "Müller",
            subtitle: "Horse Trainer"
        },
        {
            id: 4,
            firstName: "Josef",
            lastName: "Gruber",
            subtitle: "Physician"
        },
        {
            id: 5,
            firstName: "Tamara",
            lastName: "Chef",
            subtitle: "Surgeon"
        },
        {
            id: 6,
            firstName: "Hein",
            lastName: "Blöd",
            subtitle: "Art Director"
        },
        {
            id: 7,
            firstName: "Stefan",
            lastName: "Meier",
            subtitle: "Secretary"
        },
        {
            id: 8,
            firstName: "Manfred",
            lastName: "Gruber",
            subtitle: "Project Manager"
        },
        {
            id: 9,
            firstName: "Max",
            lastName: "Hinterhuber",
            subtitle: "Information Officer"
        }
    ];
})();
