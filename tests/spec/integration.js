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

  it('should have a default starting time', function() {
    let timerDisplay = browser.element('.timer-display');

    assert.equal(timerDisplay.getText(), '25:00');
  });

  it('should have a way to set a new work time', function() {
    browser.url('/');

    let timerDisplay = browser.element('.timer-display');
    let workInput = browser.element('.work-input');

    workInput.setValue('10:00');
    browser.click('.start-timer');

    assert.equal(timerDisplay.getText(), '10:00');
  });

  it.skip('should have a way change work time', function() {
    browser.url('/');

    let timerDisplay = browser.element('.timer-display');
    let workInput = browser.element('.work-input');

    browser.click('.work-input');

    assert.equal(timerDisplay.getText(), '26:00');
  });

  it.skip('should have a button to start the timer', function() {
    browser.url('/');
    let startButton = browser.element('.start-timer');
    let timerDisplay = browser.element('.timer-display');

    browser.click(startButton);

    assert.notEqual(timerDisplay.getText(), '25:00');
  });
});
