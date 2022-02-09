angular.module("marvel").controller("charCtrl", function ($scope, $http, $routeParams) {
    console.log($routeParams.id);
    $scope.getCharacters = () => {
        var params = {
            ts: '1644257070',
            apikey: '5a237863b3cc2061003cbbc4fe20dc06',
            hash: 'ad8bffd5228fb73269bdc8f54daf2af6'
        };
        var baseUrl = "http://gateway.marvel.com/v1/public/characters/";
        $http.get(`${baseUrl}${$routeParams.id}?ts=${params.ts}&apikey=${params.apikey}&hash=${params.hash}`
        ).then((response) => {
            $scope.loading = false;
            $scope.char = response.data.data.results[0];
            console.warn( $scope.char);
        });
    };
});