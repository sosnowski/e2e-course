angular.module('myapp', []).controller('ToDoCtrl', function ($scope, todos) {
    $scope.elements = [
        {
            id: 1,
            value: 'test',
            done: false
        },
        {
            id: 1,
            value: 'test2',
            done: false
        }
    ];
    $scope.inputValue = '';

    $scope.toggle = function (record) {
        //change record status, and update it
    };

    $scope.add = function () {
        //save element
    };

    //load elements
});
