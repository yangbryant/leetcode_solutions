/**
 * @param {number} num
 * @return {string}
 */

 var numToRoman = function(s) {
    var romanMap = {
        '0': '',
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M'
    };
    return romanMap[s];
 };

var numToArray = function(s) {
    var arrayMap = {
        '0': [],
        '1': [1],
        '2': [1, 1],
        '3': [1, 1, 1],
        '4': [1, 5],
        '5': [5],
        '6': [5, 1],
        '7': [5, 1, 1],
        '8': [5, 1, 1, 1],
        '9': [1, 10]
    };
    return arrayMap[s];
};

var intToRoman1 = function(num) {
    var s = '';
    var length = num.toString().length;
    num.toString().split('').forEach(function(elem, idx) {
        numToArray(elem).forEach(function(ele) {
            s += numToRoman(ele * Math.pow(10, length - 1 - idx));
        });
    });
    return s;
};

var intToRoman = function(num) {
    var thmap = {
        '0': '',
        '1': 'M',
        '2': 'MM',
        '3': 'MMM',
    };
    var hmap = {
        '0': '',
        '1': 'C',
        '2': 'CC',
        '3': 'CCC',
        '4': 'CD',
        '5': 'D',
        '6': 'DC',
        '7': 'DCC',
        '8': 'DCCC',
        '9': 'CM'
    };
    var tmap = {
        '0': '',
        '1': 'X',
        '2': 'XX',
        '3': 'XXX',
        '4': 'XL',
        '5': 'L',
        '6': 'LX',
        '7': 'LXX',
        '8': 'LXXX',
        '9': 'XC'
    };
    var bmap = {
        '0': '',
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
    };
    return thmap[Math.floor(num/1000)] + hmap[Math.floor((num%1000)/100)] + tmap[Math.floor((num%100)/10)] + bmap[Math.floor(num%10)];
};

var num = 1;
console.log(intToRoman(num));