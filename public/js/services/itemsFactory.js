(function() {

    "use strict";

    angular
        .module('clickerApp')
        .factory('itemsFactory', itemsFactory);


    itemsFactory.$inject = [
        '$http', '$q'
    ]

    function itemsFactory($http, $q) {
        return {

            // get all items available in database
            get: function() {
                //console.log("FACTORY");
                // var deferred = $q.defer();
                // $http({ 
                //     method: "GET", 
                //     url: 'http://clicker/public/items'
                // }).then(function(response){
                //    deferred.resolve(response.data);
                //    console.log(response.data);
                // })
                // .catch(function(response){
                //   deferred.reject(response);
                // });
                return $http({ 
                    method: "GET", 
                    url: 'http://clicker/public/items'
                }).then(function (response) {
                   return response.data;
                });                
            },

            // save new item
            store: function(itemData) {
                var deferred = $q.defer();
                $http({ 
                    method: "POST", 
                    url: 'http://clicker/public/items',
                    data: itemData
                }).then(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .catch(function(response){
                    deferred.reject(response);
                });
                return deferred.promise;
            }
        }
    }

})();