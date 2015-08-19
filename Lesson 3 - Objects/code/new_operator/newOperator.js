(function (global) {
	if (!global.APP) {
		global.APP = {};
	}

	//Implement function that will work like a new operator;
	global.APP.createClassInstance = function (ClassFunction) {
		var properArgs = Array.prototype.slice.call(arguments, 1);
		//create empty object with a given prototype
		var instance = Object.create(ClassFunction.prototype);
		//instance.something();

		//execute the constructor function (ClassFunction)
		//in the context of the above Object
		ClassFunction.apply(instance, properArgs);
		//instance.name === 'Damian'

		//return this object
		return instance;
	};

	var MyClass = function (arg1, arg2, arg3) {
		this.name = 'Damian';
	};

	MyClass.prototype.something = function () {};

	var inst = new MyClass(1, 2, 3);
	inst.name === 'Damian';
	inst.something();
	//
	var inst2 = createClassInstance(MyClass, 1, 2, 3);
	inst2.name === 'Damian';
	inst2.something();


	//Example usage:
	/*
	var inst = new MyClass(arg1, arg2, arg3);

	var inst = global.APP.createClassInstance(MyClass, arg1, arg2, arg3);
	*/

}(window));
