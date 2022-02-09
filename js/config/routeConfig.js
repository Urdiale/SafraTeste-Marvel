angular.module("marvel").config(function ($routeProvider) {
    $routeProvider.when("/home",{
        templateUrl:"view/home.html"
    });
    $routeProvider.when("/tables",{
        templateUrl:"view/tables.html",
    });
    $routeProvider.when("/char/:id",{
        templateUrl:"view/char.html",
    });
    $routeProvider.otherwise({redirectTo:"/home"});
});