angular.module('myapp', []).controller('ToDoCtrl', function ($scope) {

    function updateCounters() {
        $scope.countAll = $scope.elements.length;

        $scope.countTodo = 0;
        $scope.elements.forEach(function (element) {
            if (!element.done) {
                $scope.countTodo++;
            }
        });
    }

    $scope.elements = [
        {
            id: 1,
            value: 'test',
            done: false
        },
        {
            id: 2,
            value: 'test2',
            done: false
        }
    ];
    $scope.inputValue = '';
    $scope.countTodo = 0;
    $scope.countAll = 0;

    $scope.toggle = function (record) {
        record.done = !record.done;
        updateCounters();
    };

    $scope.add = function () {
        $scope.elements.push({
            id: Date.now(),
            value: $scope.inputValue,
            done: false
        });
        $scope.inputValue = '';
        updateCounters();
    };

    updateCounters();
    //load elements
});
