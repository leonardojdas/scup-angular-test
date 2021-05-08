angular.module("faleMais").filter("adjustPlan", function () {
	return function (input) {
		return input.replace("Mais", " + ");
	};
});