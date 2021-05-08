angular.module("faleMais").factory("detailsAPI", function ($http, config) {
	var _getDetails = function () {
		return $http.get(config.baseUrl + "/ddd/details");
	};

	return {
		getDetails: _getDetails
	};
});