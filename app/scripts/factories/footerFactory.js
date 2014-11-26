'use strict';

app.factory('footerFactory', function () {

    var theFooter = 'ANNK Group'; 

    return {
        isVisible: function () {
            return !!theFooter;
        },
        footer: function () {
            return theFooter;
        }
    };
        
});