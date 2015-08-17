angular.module('myapp', []).controller('ToDoCtrl', function ($scope, todos) {
    $scope.elements = [
        {
            id: 1,
            value: 'test',
            done: false
        }
    ];
    $scope.inputValue = '';

    $scope.toggle = function (record) {
            record.done = !record.done;
            todos.update(record).then(function () {

            });
    };

    $scope.add = function () {
        todos.create($scope.inputValue).then(function (newRecord) {
            $scope.elements.push(newRecord);
        });
    };

    todos.load().then(function (data) {
        $scope.elements = data;
    });
});
