(function (global) {
	var mapArray;

	if (!global.APP) {
		global.APP = {};
	}

	mapArray = function (array, callback, ctx) {
		var result = [];
		for (var i = 0; i < array.length; i++) {
			result[i] = (callback.apply(ctx, [array[i], i, array]));
		}

		return result;
	};

	global.APP.mapArray = mapArray;

}(window));
// var arr = [1, 2, 3, 4, 5, 6];
//
// var callback = function (arrElement, index, array) {
// 	return arrElement + 2;
// };
//
// var newArray = mapArray(arr, callback);
//
//
// Przykład użycia:


/*
newArray; // [3, 4, 5, 6, 7, 8]

var values = {
	multiplyBy: 10;
};

var newArray2 = mapArray(arr, function (arrElement, index, array) {
	return arrElement * this.mutiplyBy;
}, values);

newArray2; [10, 20, 30, 40, 50, 60]
*/
