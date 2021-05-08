angular.module("faleMais").factory("plansAPI", function ($http, config) {
	var _getPlans = function () {
		return $http.get(config.baseUrl + "/plans");
	};

	return {
		getPlans: _getPlans
	};
});