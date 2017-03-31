(function() {

    'use strict';

    angular
        .module('clickerApp')
        .controller('MainController', MainController);

    MainController.$inject = [      
        '$http',
        '$scope',
        'itemsFactory'
    ];

    function MainController($http, $scope, itemsFactory) {
        $scope.world = "Ukraine";
        
        itemsFactory.get().then(function(data){            
            $scope.items = data;
            console.log($scope.items);
        })
        .catch(function(response) {
            console.log(response.status);
        });       

        $scope.addItem = function($event) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13) {
                //console.log("hey!");
                var itemData = {
                    text: $scope.itemText
                }
                //console.log(itemData);
                itemsFactory.store(itemData)
                    .then(function(data) {
                        console.log("success");                        
                    });
            }

        };

        
    };
})();