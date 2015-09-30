define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var NewArticle= require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showArticle: function (id) {
            app.showLayout(new NewArticle({id:id}));
        }
    });

    module.exports = new MapRouteController();
});