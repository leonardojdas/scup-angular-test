angular.module("faleMais").factory("pricingAPI", function ($http, config) {
	var _getPricing = function () {
		return $http.get(config.baseUrl + "/ddd/pricing");
	};

	return {
		getPricing: _getPricing
	};
});