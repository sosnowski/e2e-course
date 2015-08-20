/*LAYER 1*/
function ClassMasterObject (locator) {
  if(!locator){
    throw new Error ("Failed to initialize object, you must pass locator (protractor Web element reference)");
  }
  else {
    this.locator = locator;
  }
};

ClassMasterObject.prototype.isVisible = function ()
{
  return this.locator.isPresent().isDisplayed();
};

ClassMasterObject.prototype.hasElement = function (selector)
{
  return this.locator.all(selector).first().isPresent().isDisplayed();
};

ClassMasterObject.prototype.getText = function ()
{
  return this.locator.getText();
};

module.exports = ClassMasterObject;
