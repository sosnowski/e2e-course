angular.module('myapp').factory('todos', function ($http) {
    return {
        create: function (newValue) {
            return $http.post('/api/todos', {
                value: newValue
            });
        },
        update: function (newRecord) {
            return $http.put('/api/todos', {
                value: newValue
            })
        },
        load: function () {
            return $http.get('/api/todos');
        }
    };
});
