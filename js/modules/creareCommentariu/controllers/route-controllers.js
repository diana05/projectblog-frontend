define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var CreateNewCommentariu = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showNewComment: function () {
            app.showLayout(new CreateNewCommentariu);
        }
    });

    module.exports = new MapRouteController();
});

