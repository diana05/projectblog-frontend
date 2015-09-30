define(function(require, exports, module) {
    var Backbone = require('backbone');
    var ItemModel= require('./item');

    module.exports = Backbone.Collection.extend({
        url: 'http://localhost:8084/blog-rest-service/article'
        , model: ItemModel
    });
});