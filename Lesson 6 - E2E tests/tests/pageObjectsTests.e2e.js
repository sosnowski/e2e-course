/*LAYER 3*/

describe ('Adding ToDos using PoP', function(){
  var pClass = require('./pageObjectsDefinition.e2e.js');
  var page = new pClass();

  beforeEach(function(){
    browser.get('');
  });

  it('Will add sth, and check if element exists on the list', function(){
    page.field.inputText('pop');
    page.list.findElement('pop').then(function(res){
      expect(res.status).toBeTruthy(res.message);
    });
    page.list.findElement('popik').then(function(res){
      expect(res.status).toBeFalsy(res.message);
    });
  });
});
