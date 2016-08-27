const assert =  require('assert');

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Kyle Misencik & Ben Godfrey - Tier 1 Turing');
  });

  it('should have an input field for work time', function() {
    let workInput = browser.element('.work-input');

    workInput.setValue('25');

    assert.equal(workInput.getValue(), '25');
  });

  it('should have an input field for break time', function() {
    let breakInput = browser.element('.break-input');

    breakInput.setValue('5');

    assert.equal(breakInput.getValue(), '5');
  });

  it('should have a default starting time', function() {
    let workDisplay = browser.element('.work-display');

    assert.equal(workDisplay.getText(), '25:00');
  });

  it('should have a way to set a new work time', function() {
    browser.url('/');

    let workDisplay = browser.element('.work-display');
    let workInput = browser.element('.work-input');

    workInput.setValue('10');
    browser.click('.work-display');

    assert.equal(workDisplay.getText(), '10:00');
  });


  it('should have a button to start the timer', function() {
    browser.url('/');
    let workDisplay = browser.element('.work-display');

    browser.click('.start-timer');

    assert.notEqual(workDisplay.getText(), '25:00');
  });

  it('should have a way to set a break time', function() {

    let breakDisplay = browser.element('.break-display');
    let breakInput = browser.element('.break-input');


    browser.waitForText('.break-display', 6000);
    breakInput.setValue('10');
    browser.click('.break-display');
    assert.equal(breakDisplay.getText(), '10:00');
  });
});
