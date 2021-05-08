angular.module("faleMais").config(function ($routeProvider) {
	$routeProvider.when("/plans", {
		templateUrl: "view/plans.html",
		controller: "faleMaisCtrl",
		resolve: {
			details: function (detailsAPI) {
				return detailsAPI.getDetails();
			},
			plans: function (plansAPI) {
				return plansAPI.getPlans();
			},
			pricing: function (pricingAPI) {
				return pricingAPI.getPricing();
			}
		}
	});
	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});
	$routeProvider.otherwise({
		redirectTo: "/plans"
	})
});