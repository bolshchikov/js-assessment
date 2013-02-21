if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var res = num.toString(2);
        return parseInt(res[res.length - bit], 10);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var res = num.toString(2);
        if (res.length < 8) {
            return 0 + res;
        }
        else {
            return res;
        }
    },

    multiply: function(a, b) {
        var prec = function (num) {
            return (num + '').split('.')[1].length;
        }(b);
        var mult = a * b;
        return Number(mult.toFixed(prec));
    }      
    

  };
});

