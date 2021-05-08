angular.module("faleMais").filter("adjustPrice", function () {
	return function (input, position) {
		
		if (position === 1) {
			if (input !== "-") return "R$";
		};

		if (position === 2) {
			if (input === "-") return "-";

			var number = input.split(".");
			return number[0];
		};

		if (position === 3) {
			if (input !== "-") {
				var number = input.split(".");
				return ","+ number[1];
			};
		};

		return "";
	};
});