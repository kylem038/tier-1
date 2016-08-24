const assert =  require('assert');

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Kyle Misencik & Ben Godfrey - Tier 1 Turing');
  });

  it('should have an input field for work time', function() {
    let workInput = browser.element('.work-input');

    workInput.setValue('25:00');

    assert.equal(workInput.getValue(), '25:00');
  });

  it('should have an input field for break time', function() {
    let breakInput = browser.element('.break-input');

    breakInput.setValue('5:00');

    assert.equal(breakInput.getValue(), '5:00');
  });

  it.skip('should have a button to start the timer', function() {
    browser.url('/');
    let startButton = browser.element('.start-timer');

    browser.click(startButton);

    assert.equal();
  });
});
