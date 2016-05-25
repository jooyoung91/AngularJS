/// <reference path="../angular.js" />

angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass, productListPageCount){
        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;
        $scope.selectCategory = function(newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function(newPage){
            $scope.selectedPage = newPage;
        }
        $scope.categoryFilterFn = function(data) {
            return selectedCategory == null || data["category"] == selectedCategory;
        }

        $scope.getCategoryClass = function(category){
            if(selectedCategory == category)
                return productListActiveClass
            else
                return "";
        }

        $scope.getPageClass = function(page) {
            return page == $scope.selectedPage ? productListActiveClass : "";
        }
    })
