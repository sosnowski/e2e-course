describe ('My first test suite', function(){
  beforeEach(function()
  {
    browser.get('');
    browser.sleep(2000);
  });

  it('exc1', function(){
      var toDo = "SthToDo";
      var inputBox = element(by.model('inputValue'));
      var submitButton = element(by.css('button[ng-click="add()"]'));
      var list = element(by.id('tasks')).all(by.repeater('element in elements'));
      inputBox.sendKeys(toDo);
      submitButton.click();
      //first time iterate trough the list
      list
      .map(function (item) {
        return {
          name: item.getText(),
          locator: item
        };
      })
      .then(function (collection) {
        //check for all elements count -> compare to label
        var allItemsLabel = element(by.css('header .count-all')).getText();
        expect(allItemsLabel).toEqual(collection.length.toString());
        //click proper element and check if is highlighted
        collection.forEach(function (item){
          if(item.name === toDo)
          {
            item.locator.click();
            expect(item.locator.getAttribute('class')).toContain('done');
          }
        });
      });
      //check for all to do elements count -> compare to label
      list
      .map(function (item)
      {
        return item.getAttribute('class');
      }).
      then(function(collection){
        var toDoCnt = 0;
        var toDoItemsLabel = element(by.css('header .count-todo')).getText();
        collection.forEach(function(x){
          if(x.indexOf("done") < 0){toDoCnt++;}
        });
        expect(toDoItemsLabel).toEqual(toDoCnt.toString());
      })


  });
});
