"use strict";

app.factory('headerFactory', function() {

    var theTitle = 'Web API browser'; // fall back title

    return {
        isVisible:  function() { return !!title; },
        title: function() { return theTitle; },
        setTitle: function(str) {
            theTitle = str;
        }
    };
});
