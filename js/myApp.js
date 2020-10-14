var app = angular.module('myApp', []);
app.service('ageService', function () {
    this.check = function (x) {
        if (x === NaN) {
            return "";
        }

        if (x < 14) {
            return "Your cannot ask a question, you're so young!";
        }

        return "OK, your age corresponds our company policy.";
    }
});

app.filter('myFilterAge', ['ageService', function (ageService) {
    return function (x) {
        return ageService.check(x);
    };
}]);