angular.module("marvel").controller("marvelCtrl", function ($scope, $http) {
    $scope.message = "Hello World!";
    $scope.loading = true;
    $scope.getCharacters = () => {
        var params = {
            ts:  Date.now(),
            apikey: '5a237863b3cc2061003cbbc4fe20dc06',
        };
        var hash= CryptoJS.MD5(`${params.ts}fbf255068eccea6d0ef951b9f25626b57ab2fe72${params.apikey}`).toString()
        var baseUrl = "http://gateway.marvel.com/v1/public/characters?";
        $http.get(`${baseUrl}ts=${params.ts}&apikey=${params.apikey}&hash=${hash}`
        ).then((response) => {
            console.log(response.data);
            $scope.loading = false;
            $scope.chars = response.data.data.results;
        });
    };
});