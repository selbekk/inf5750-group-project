app.factory('headerFactory', function() {

    var nav = '';
    var theTitle = '';

    return {
        isVisible:  function() { return true; } ,
        nav:   function() { return nav; },
        setNav: function(obj) {
            nav = obj;
        },
        title: function() { return theTitle; },
        setTitle: function(str) {
            theTitle = str;
        }
    };
});
