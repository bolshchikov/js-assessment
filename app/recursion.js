if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var res = [],
          flag = false,
          queue = [];
      function recursion (data) {
        data.files.forEach(function (el) {
          if (typeof el === 'string') res.push(el);
          else return recursion(el);
        });  
      }
      if (!dirName) recursion(data);
      else {
        queue.push(data);
        while (!flag) {
          var u = queue.shift();
          if (u.dir === dirName) {
            recursion(u);
            break;
          }
          else {
            u.files.forEach(function (el) { 
              if (typeof (el) !== 'string') queue.push(el);
            });
          }  
        }
      }
      return res;
    },

    permute: function(arr) {
      var res = [];
      return res;
    }
  };
});
