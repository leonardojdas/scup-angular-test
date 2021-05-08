angular.module("faleMais").directive("uiNumber", function () {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var _formatNumber = function (number) {
				number = number.replace(/[^0-9]+/g, "");
				return number;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatNumber(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});