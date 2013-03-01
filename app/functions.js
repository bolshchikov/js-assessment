if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function (str2) {
            return str + ', ' + str2;
        };
    },

    makeClosures : function(arr, fn) {
        var i = 0, len = arr.length, res = [];
        for (i; i < len; i += 1) {
            res.push( (function (val) { return function () { return fn(val); } })(arr[i]) );
        }
        return res;
    },

    partial : function(fn, str1, str2) {
        return function (mod) {       
            return fn(str1, str2 + mod.substr(0, 2));
        }
    },

    useArguments : function() {
        var res = 0, i = 0, len = arguments.length;
        for (i; i < len; i += 1) {
            res += arguments[i];
        }
        return res;
    },

    callIt : function(fn) {
        var args = [].slice.call(arguments, 1);
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args1 = [].slice.call(arguments, 1);
        return function () {
            var args2 = [].slice.call(arguments);
            return fn.apply(null, args1.concat(args2));
        };
    },

    curryIt : function(fn) {
        var args = [];
        return function helper (param) {
            args.push(param);
            if (args.length < fn.length) {
                return helper;
            }
            else {
                return fn.apply(null, args);
            }
        }
    }
  };
});
