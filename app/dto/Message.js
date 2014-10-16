var Message = function (id, type, msg, revertCallback, closeCallback) {
    var _this = this;

    var isFunction = function (input) {
        return typeof input === "function";
    };

    this.id = id;
    this.type = type;
    this.msg = msg;
    this.isRevertable = isFunction(revertCallback);

    this.revert = function () {
        if (_this.isRevertable) {
            revertCallback();
        }
    };
    this.closeMessage = function () {
        if (isFunction(closeCallback)) {
            closeCallback();
        }
    };


};