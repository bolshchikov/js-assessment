if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function (prev, curr) {
            return prev + curr;
        });
    },

    remove : function(arr, item) {
        while (arr.indexOf(item) !== -1) {
            arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
        while (arr.indexOf(item) !== -1) {
            arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var i = 0,
            len = arr.length,
            counter = 0;
        for (i; i < len; i += 1) {
            if (arr[i] === item) counter += 1;   
        }
        return counter;
    },

    duplicates : function(arr) {
        var i = 0, len = arr.length, counter = [], res = [];
        for (i; i < len; i += 1) {
            if (counter[arr[i]]) {
                counter[arr[i]] += 1;
            }
            else {
                counter[arr[i]] = 1;
            }
        }
        counter.forEach(function (el, i) {
            if (el && el > 1) res.push(i);
        });
        return res;

    },

    square : function(arr) {
        return arr.map(function (el) {
            return el*el;
        });
    },

    findAllOccurrences : function(arr, target) {
        var i = 0, len = arr.length, res = {};
        for (i ; i < len; i += 1) {
            if (res[arr[i]]) res[arr[i]].push(i);
            else {
                res[arr[i]] = [];
                res[arr[i]].push(i);
            }
        }
        return res[target];
    }
  };
});
