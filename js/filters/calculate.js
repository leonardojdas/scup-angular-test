angular.module("faleMais").filter("calculate", function (config) {
	return function (time, minutes, rate) {
		if (!rate) return "-";
		if (!minutes) return "-";
		if (time ===  "-") return (minutes * rate).toFixed(2);

		var surplus = parseFloat(time) - parseFloat(minutes);
		if (surplus < 0) return (((Math.abs(surplus) * config.fee) + Math.abs(surplus)) * rate).toFixed(2);

		return "-";
	};
});