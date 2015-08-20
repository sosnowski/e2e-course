/*LAYER 1*/
var ClassMasterObject = require('./masterObject.e2e.js');
var p = require('protractor');

var ClassToDoList = function (_locator, listElementsEnumerator)
{
  ClassMasterObject.call(this, _locator);

  if(listElementsEnumerator)
  {
    this.listElementsEnumerator = listElementsEnumerator;
  }
  else {
    this.listElementsEnumerator = by.tagName('li');
  }
};

ClassToDoList.prototype = Object.create(ClassMasterObject.prototype);

ClassToDoList.prototype.getItems = function(text){
  var result = {
    status: false,
    message: '',
    items: [],
    count: 0
  };
  var defer = p.promise.defer();
  var self = this;

  self.locator.all(self.listElementsEnumerator)
  .map(function(itm){
    return {
      name: itm.getText(),
      item: itm,
      toDoClass: itm.getAttribute('class')
    };
  })
  .then(function(itms){
    itms.forEach(function(itmx){
      var obj = {
        name: itmx.name,
        webElement: itmx.item,
        toDo: (itmx.name.indexOf('done') < 0)
      };
      result.items.push(obj);
    });

    result.status = true;
    result.count = result.items.length;
    result.message = 'Yupi - ' + result.count + ' items found';
    defer.fulfill(result);

  });

  return defer.promise;
};

ClassToDoList.prototype.findElement = function(pattern){
  var result = {
    status: false,
    message: '',
    item: undefined
  };
  var defer = p.promise.defer();
  var self = this;

  self.getItems()
  .then(function(res){
    if(typeof pattern === "number")
    {
      if(res.count <= pattern || pattern < -1)
      {
        result.message = "Error in findElement: Index " + pattern + " is out of range";
        defer.fulfill(result);
      }
      else
      {
        result.message = "Element " + pattern + " returned";
        result.status = true;
        result.item = res[pattern];
      }
    }
    else {
      for (var i = 0; i < res.items.length; i++) {
        if(res.items[i].name.indexOf(pattern) > -1){
          result.item = res.items[i];
          result.status = true;
          result.message = "Element ["+pattern+"] was found on the list, at ["+i+"] index"
          break;
        }
      }

      if(!result.status)
      {
        result.message = "Error in findElement: No elements found using " + pattern + " pattern";
      }
      defer.fulfill(result);
    }
  });

  return defer.promise;
};

module.exports = ClassToDoList;
