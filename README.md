# add-commas

Add commas to a number

## Credit

Core logic adapted from [this thread on Stack Overflow](http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript)

## Usage

```
var addCommas = require('add-commas');

// yes
addCommas(12345);   // 12,345
addCommas('12345'); // 12,345

// no
addCommas();        // throws Error
addCommas(123.45)   // throws Error
addCommas('dogs')   // throws Error
```

## License

Go nuts.