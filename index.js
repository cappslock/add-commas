// from http://stackoverflow.com/a/2901298/64372
module.exports = function(n) {
	var parts = n.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
};
