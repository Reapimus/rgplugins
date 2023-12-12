if (!window?._momentFormat) {
    window._momentFormat = moment.prototype.format;
}

module.exports = {
    load() {
        console.log("24 hour timestamps loaded");
        moment.prototype.format = function (str) {
            str = str.replace("h:mm A", "HH:mm");
            return window._momentFormat.bind(this)(str);
        };
    },
    unload() {
        console.log("24 hour timestamps unloaded");
        moment.prototype.format = function (str) {
            return window._momentFormat.bind(this)(str);
        };
    },
}