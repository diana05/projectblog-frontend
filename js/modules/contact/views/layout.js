/**
 * Created by User on 24.09.2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'contact',
        template: '#contact-layout'
    });
});
