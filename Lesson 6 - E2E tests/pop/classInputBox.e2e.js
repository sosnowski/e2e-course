/*LAYER 1*/
var ClassMasterObject = require('./masterObject.e2e.js');
var p = require('protractor');

var ClassInputBox = function (_locator, submitBoxLocator)
{
  ClassMasterObject.call(this, _locator);
  if(submitBoxLocator)
  {
    this.submitBoxLocator = submitBoxLocator;
  }
  else {
      this.submitBoxLocator = by.tagName('button');
  }
}

ClassInputBox.prototype = Object.create(ClassMasterObject.prototype);

ClassInputBox.prototype.inputText = function(text){
  var result = {
    status: false,
    message: ''
  };
  var defer = p.promise.defer();
  var self = this;

  self.locator.sendKeys(text)
  .then(function(){
    return self.locator.element(self.submitBoxLocator).click();
  })
  .then(function()
  {
    result.status = true;
    result.message = 'Yupi - text submitted';
    defer.fulfill(result);
  });

  return defer.promise;
};

ClassInputBox.prototype.getValue = function(text){
  var result = {
    status: false,
    message: ''
  };
  var defer = p.promise.defer();
  var self = this;

  self.locator.getAttribute('value')
  .then(function(val){
    result.value = val;
    result.status = true;
    result.message = "Input value is : " + val;
    defer.fulfill(result);
  });

  return defer.promise;
}

module.exports = ClassInputBox;
