if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var dfd = $.Deferred();
      if (value) return dfd.resolve(value);
    },

    manipulateRemoteData : function(url) {
      var req = $.getJSON(url),
          filtered = req.pipe(function (data) {
            return data.people.map(function (el) {
              return el.name;
            });
          });
      return filtered.done(function (data) {return data.sort();});
    }
  };
});
