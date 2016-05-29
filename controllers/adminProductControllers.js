angular.module("sportsStoreAdmin")
.constant("productUrl", "http://localhost:2403/products/")
.config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
})
.controller("productCtrl", function($scope, $resource, productUrl){
    $scope.productsResrouce = $resource(productUrl + ":id", {id : "@id"});

    $scope.listProducts = function (){
        $scope.products = $scope.productsResrouce.query();
    }

    $scope.deleteProduct = function(product) {
        product.$delete().then(function () {
            $scope.products.splice($scope.produts.indexOf(product), 1);
        })
    }

    $scope.createProduct = function(product) {
        new $scope.productsResouce(proudct).$save().then(function (newProduct){
            $scope.products.push(newProudct);
            $scope.editedProduct = null;
        })
    }

    $scope.updateProduct = function(product) {
        product.$save();
        $scope.editedProduct = null;
    }

    $scope.startEdit = function(product) {
        $scope.editedProduct = product;
    }

    $scope.cancelEdit = function() {
        $scope.editedProduct = null;
    }

    $scope.listProducts();
})