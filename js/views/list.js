"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        return m("main.container", [
            m("h1", "Nobelfesten"),
            m("p", "Välj ett årtal i listan:")
        ]);
    }
};
