module.exports = function (n) {
    var nInt = parseInt(n, 10);

    if (nInt === NaN) {
        throw new Error('not a number');
    }
    else if (nInt.toString() !== n.toString()) {
        throw new Error('not an integer');
    }
    else {
        var nStr = n.toString();
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;

        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2; 
    }
};