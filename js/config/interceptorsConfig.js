angular.module("faleMais").config(function ($httpProvider) {
	$httpProvider.interceptors.push("errorInterceptor");
	$httpProvider.interceptors.push("loadingInterceptor");
});