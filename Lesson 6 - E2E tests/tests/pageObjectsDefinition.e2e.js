/*LAYER 2*/

var PageClass = function () {

  var ClassInput = require('../pop/classInputBox.e2e.js');
  var ClassList = require('../pop/classToDoList.e2e.js');

  this.field = new ClassInput(element(by.model('inputValue')), by.xpath('../button'));
  this.list = new ClassList(element(by.id('tasks')));
}
module.exports = PageClass;
