define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var CreateArticle = require('modules/createArticle/router');
    var UpdateArticle = require('modules/updateArticle/router');
    var ShowArticle= require('modules/showArticle/router');

    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new CreateArticle();
                new UpdateArticle();
                new ShowArticle();
            });
        }
    });

    module.exports = new RouterInitializer();
});
