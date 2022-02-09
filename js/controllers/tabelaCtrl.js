angular.module("marvel").controller("marvelCtrl", function ($scope, $http) {
    $scope.message = "Hello World!";
    $scope.loading = true;
    $scope.getCharacters = () => {
        var params = {
            ts: '1644257070',
            apikey: '5a237863b3cc2061003cbbc4fe20dc06',
            hash: 'ad8bffd5228fb73269bdc8f54daf2af6'
        };
        var baseUrl = "http://gateway.marvel.com/v1/public/characters?";
        $http.get(`${baseUrl}ts=${params.ts}&apikey=${params.apikey}&hash=${params.hash}`
        ).then((response) => {
            console.log(response.data);
            $scope.loading = false;
            $scope.chars = response.data.data.results;
        });
    };
});