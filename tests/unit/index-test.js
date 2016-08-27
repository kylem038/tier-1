const assert = require('chai').assert;
const Clock = require('../../lib/clock');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('our clock', function () {
  it('is an object', function () {
    let clock = new Clock();
    assert.isObject(clock);
  });

  it('should take the first argument and set it as the duration', function(){
    let clock = new Clock(10);
    assert.equal(clock.duration, 10);
  });

  it('should have a default start time equal to null', function(){
    let clock = new Clock();
    assert.equal(clock.startTime, null);
  });

  it('should have a default  endTime equal to null', function(){
    let clock = new Clock();
    assert.equal(clock.endTime, null);
  });

  it('should have a function that starts the clock', function () {
    let clock = new Clock();
    let time = Date.now();
    clock.start(time);
    assert.equal(clock.startTime, time);
  });

  it('should have a function to find the endTime', function() {
    let clock = new Clock(10);
    let time = Date.now();
    clock.start(time);
    assert.equal(clock.endTime, (time+10));
  });

  it.skip('should have a function to find timeInBetween', function() {
    let clock = new Clock(10);
    let time = Date.now();
    clock.start(time);
    clock.endTime();
    assert.equal(clock.timeInBetween, (clock.endTime - time));
  });



});
