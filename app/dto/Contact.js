var Contact = function (id, name) {
    var _this = this;
    this.id = id;
    this.name = name;
    this.phone = [];
    this.address = [];

    this.getFirstName = function () {
        var parts = splitName(this.name);
        if (parts.length > 1) {
            return parts.slice(0, parts.length - 1).join(" ");
        } else {
            return "";
        }
    };
    this.getLastName = function () {
        var parts = splitName(this.name);
        if (parts.length > 0) {
            return parts[parts.length - 1];
        } else {
            return "";
        }
    };

    this.compareTo = function(contact) {
        var aLastName = _this.getLastName().toLowerCase();
        var aFirstName = _this.getFirstName().toLowerCase();
        var bLastName = contact.getLastName().toLowerCase();
        var bFirstName = contact.getFirstName().toLowerCase();

        if (aLastName < bLastName) {
            return -1;
        } else if (bLastName < aLastName) {
            return 1;
        } else if (aFirstName < bFirstName) {
            return -1;
        } else if(bFirstName < aFirstName){
            return 1;
        } else {
            return 0;
        }
    };

    var splitName = function (name) {
        return name.split(" ");
    };
};