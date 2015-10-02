define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var DespreMineLayout = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showDespreMine: function () {
            app.showLayout(new DespreMineLayout);
        }
    });

    module.exports = new MapRouteController();
});
