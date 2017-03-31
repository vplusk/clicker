(function() {
    "use strict";

    angular
        .module('clickerApp')
        .directive('itemsData', itemsData);

    itemsData.$inject = [
        'itemsFactory'
    ];

    function itemsData(itemsFactory) {
        return {
            restrict: 'E',
            templateUrl: './js/templates/itemsData.html',
            link: itemsFunction
        }

        function itemsFunction(scope) {
            itemsFactory.get().then(function(data) {
                $scope.items = data;
                console.log($scope.items);
            })
            .catch(function(response) {
                console.log(response.status);
            });

            $scope.addItem = function($event) {
                var keyCode = $event.which || $event.keyCode;
                    if (keyCode === 13) {                        
                        var itemData = {
                            text: $scope.itemText
                        }
                        //console.log(itemData);
                        itemsFactory.store(itemData)
                            .then(function(data) {
                                console.log("item added");
                            });
                    }
            };
        }
    }
})();