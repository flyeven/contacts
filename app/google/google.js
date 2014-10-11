(function () {
    var app = angular.module('google', ['user']);

    app.service('GoogleService', ['UserModel', function (userModel) {
        this.getAllContacts = function (token, callback) {
            gapi.client.request({
                path: "/m8/feeds/contacts/default/full?token_access="+token+"&alt=json&max-results=10000",
                method: "GET",
                callback: callback
            });
        };

        this.getContact = function (id, callback) {
            gapi.client.request({
                path: "/m8/feeds/contacts/default/full/" + id + "?token_access=" + userModel.auth.access_tokenId + "&alt=json",
                method: "GET",
                callback: callback
            });
        };
    }]);
})();