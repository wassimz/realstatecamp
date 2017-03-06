(function() {
    'use strict';
    angular
        .module('assessoriaTorrellesApp')
        .factory('Property', Property);

    Property.$inject = ['$resource'];

    function Property ($resource) {
        var resourceUrl =  'api/properties/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'byFilters': { method: 'GET', isArray: true, url: 'api/property/byfilters'},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
