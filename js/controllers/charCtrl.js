angular.module("marvel").controller("charCtrl", function ($scope, $http, $routeParams) {
    console.log($routeParams.id);
    $scope.getCharacters = () => {
       var params = {
            ts:  Date.now(),
            apikey: '5a237863b3cc2061003cbbc4fe20dc06',
        };
        var hash= CryptoJS.MD5(`${params.ts}fbf255068eccea6d0ef951b9f25626b57ab2fe72${params.apikey}`).toString()
        var baseUrl = "http://gateway.marvel.com/v1/public/characters/";
        $http.get(`${baseUrl}${$routeParams.id}?ts=${params.ts}&apikey=${params.apikey}&hash=${hash}`
        ).then((response) => {
            $scope.loading = false;
            $scope.char = response.data.data.results[0];
            console.warn( $scope.char);
        });
    };
});