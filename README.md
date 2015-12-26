# add-commas

Add commas to a number

## Credit

Core logic adapted from [this answer on Stack Overflow](http://stackoverflow.com/a/2901298/64372)

## Usage

```
var addCommas = require('add-commas');

// yes
addCommas(12345);    // 12,345
addCommas('12345');  // 12,345
addCommas(12345.67); // 12,345.67

// no
addCommas();        // throws Error
```

## License

Go nuts.
